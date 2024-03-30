const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
fs.mkdirSync(uploadDir, { recursive: true });

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});
const upload = multer({ storage: storage });

// Middleware setup
app.use(express.static(".")); // Serve static files from the root directory
app.use("/uploads", express.static("uploads")); // Serve static files from 'uploads' directory
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable CORS

// WebSocket broadcast function
const broadcast = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

// Donation endpoint
app.post("/donate", (req, res) => {
  broadcast({ type: "donation", data: req.body });
  res.status(200).send("Donation received");
});

// Upload alert configuration endpoint
app.post(
  "/upload-alert-config",
  upload.fields([
    { name: "alertSound", maxCount: 1 },
    { name: "alertImage", maxCount: 1 },
  ]),
  (req, res) => {
    if (!req.files) {
      return res.status(400).send("No files were uploaded.");
    }

    const configData = {
      ...req.body,
      alertSoundPath: req.files["alertSound"]
        ? req.files["alertSound"][0].path
        : null,
      alertImagePath: req.files["alertImage"]
        ? req.files["alertImage"][0].path
        : null,
    };

    broadcast({ type: "config-update", data: configData });
    res.status(200).send("Alert configuration updated");
  },
);

// Test alert endpoint
app.post("/send-test-alert", (req, res) => {
  console.log("Test alert received:", req.body);
  broadcast({ type: "test-alert", data: req.body });
  res.status(200).send("Test alert sent successfully.");
});

// Endpoint to update alert configuration
app.post("/update-alert-config", (req, res) => {
  broadcast({ type: "config-update", data: req.body });
  console.log("Alert configuration updated:", req.body);
  res.status(200).send("Alert configuration updated successfully.");
});

// Missing route handler for unhandled routes
app.use((req, res) => {
  res.status(404).send("Sorry, can't find that!");
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the PORT provided by the environment.
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
