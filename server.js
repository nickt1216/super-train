const express = require('express');
const path = require('path');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(PORT, () => {
  console.log(`Market Simulator server running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
