const express = require('express');
const path = require('path');
const app = express();
const PORT = 3004;

// Serve all static files from the root directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Restaurant site running at http://localhost:${PORT}`);
});
