// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Route to serve the HTML page from the same folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to serve user data from users.json
app.get('/api/users', (req, res) => {
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Could not read user data.' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});