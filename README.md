# Real-Time Location Tracking

This project demonstrates a real-time location tracking system using **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**. It allows clients to share their geolocation in real-time, which is displayed on a map interface.

---

## Features

- Real-time tracking of user location on a map.
- User-friendly map visualization using **Leaflet.js**.
- Tracks multiple users simultaneously.
- Handles user disconnections gracefully.

---

## Technologies Used

- **Frontend**:
  - HTML5, CSS3
  - Leaflet.js for map visualization
  - Socket.IO for real-time communication

- **Backend**:
  - Node.js
  - Express.js
  - Socket.IO

- **Dependencies**:
  - `express`: Web framework for Node.js
  - `http`: For creating the server
  - `socket.io`: Real-time bi-directional communication
  - `ejs`: Templating engine
  - `path`: To handle file paths

---
##File-Structure

real-time-location-tracking/
├── public/
│   ├── css/
│   │   └── style.css          # Styling for the map
│   ├── js/
│   │   └── script.js          # Frontend logic for geolocation and map
├── views/
│   └── index.ejs              # HTML template
├── app.js                     # Backend logic
└── README.md                  # Project documentation
