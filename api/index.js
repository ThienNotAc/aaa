const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your routes
app.get('/', (req, res) => {
  res.send('Server is running from Vercel!');
});

// Export as Vercel handler
module.exports = serverless(app);
