### Real-Time Donation Alert System README

#### Overview
A Node.js project enabling live donation alerts for streamers, utilizing Express, WebSocket, HTML, and JavaScript. This prototype serves as a test project; while operational as is, some features may require further development, improvement, or might be missing.



#### Features
- Real-time alerts with WebSocket.
- Interactive viewer donation form.
- Streamer dashboard for alerts.
- OBS integration for live streaming.

#### Quick Setup
1. **Clone & Navigate**: 
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
2. **Install Dependencies**: 
   ```bash
   npm install
   ```
3. **Start Server**: 
   ```bash
   npm start
   ```

#### Configuration
- **WebSocket URL**: In `alert.html`, update WebSocket URL (`ws://localhost:3000` locally or `wss://<your-replit-url>` on Replit).

#### Accessing Pages
- **Local**: 
  - Donation Form: `http://localhost:3000/dono.html`
  - Alert Page: `http://localhost:3000/alert.html`
- **Replit**: 
  - Donation Form: `<your-replit-url>/dono.html`
  - Alert Page: `<your-replit-url>/alert.html`

#### Deployment on Replit
1. **New Repl**: Choose "Node.js" and name your repl.
2. **Upload Files**: Drag and drop project files into Replit's file explorer.
3. **Install Dependencies**: Automatically installs; use `npm install` in Shell if needed.
4. **WebSocket URL**: Update in `alert.html` to `wss://<replit-project-url>`.
5. **Run & Access**: Hit "Run". Access donation and alert pages via the web view URL.

#### OBS Integration
For live streaming, add `<your-replit-url>/alert.html` as a Browser Source in OBS.

#### Support
 If you'd like to support my efforts, consider making a KIN donation

- **KIN ADDRESS**:
  
   ```bash
   oiAoqXGkjuQTtQEScNP5uCXq4ZR8xWn3RKsMfWSWPeX
   ```
(this is a kin only address anything other then kin will be lost)

Thank you for your support!
