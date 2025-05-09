// app.js
const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Root route
app.get('/pallavi', (req, res) => {
    res.send('Hello, Pallavi !');
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
