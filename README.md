
### README for Real-Time Donation Alert Project

#### Project Overview
This project facilitates real-time donation alerts for streamers. It includes a Node.js backend using Express and WebSocket for real-time communication, and a frontend with HTML and JavaScript for displaying donation alerts and handling donations. The system allows for the immediate broadcasting of donation messages to connected clients, enabling live updates on a streamer's dashboard or alert page.

#### Getting Started

##### Prerequisites
- Node.js installed on your system.
- Basic knowledge of JavaScript and Node.js.
- OBS (Open Broadcaster Software) installed for streaming.

##### Installation
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**
   ```
   npm install express ws
   ```

3. **Start the Server**
   ```
   node server.js
   ```
   This starts the server on `localhost:3000`.

#### Usage

1. **Open the Donation Form**
   - Navigate to `http://localhost:3000/dono.html` to access the donation form.
   - Enter your name and a donation message, then submit your donation.

2. **View Real-Time Alerts**
   - Open `http://localhost:3000/alert.html` in a separate browser window or tab to view real-time donation alerts as they are made.

3. **Integrate Alerts into OBS**
   - In OBS, add a new Browser Source to your scene.
   - Set the URL to `http://localhost:3000/alert.html`.
   - Adjust the width, height, and other properties as needed to fit your stream layout.
   - Donation alerts will now appear live in your OBS stream when received.

4. **Streamer Dashboard**
   - Access the streamer dashboard at `http://localhost:3000/streamer-dashboard.html`.
   - This page allows streamers to manage and display donation alerts in a detailed manner.

#### Features
- **Real-Time Donation Alerts:** Uses WebSocket to push donation alerts to the client instantly.
- **Donation Form:** A user-friendly form for submitting donations, integrated with an external payment service.
- **Streamer Dashboard:** A dashboard for streamers to view and manage incoming donations.
- **OBS Integration:** Easily integrate donation alerts into your live stream through OBS.

#### Development Notes
- Backend setup to handle `/donate` POST requests for donation processing.
- WebSocket broadcasts donation alerts to all connected clients in real-time.
- Frontend pages (`dono.html`, `alert.html`, `streamer-dashboard.html`) served statically.

#### Contributing
We welcome contributions. Please follow the standard fork-and-pull request workflow on GitHub to contribute.

#### License
Specify your project's license here, typically MIT, GPL, etc.

---

This updated README includes instructions for integrating donation alerts into OBS, providing a complete guide for streamers to utilize the real-time alert system within their streams. You can modify the content as needed to fit your project's specific requirements or additional details you wish to include.
