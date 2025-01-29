const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the HNG Stage 0 Backend API!');
  });

// GET endpoint
app.get('/api', (req, res) => {
  const response = {
    email: 'ikotnsikak@gmail.com', // Replace with your HNG Slack email
    current_datetime: new Date().toISOString(), // Dynamically generated ISO 8601 timestamp
    github_url: 'https://github.com/Sageikot001/HNG-0.git', // Replace with your GitHub repo URL
  };
  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});