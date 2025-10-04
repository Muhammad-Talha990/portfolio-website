// Vercel serverless function for your Express app
const express = require('express');
const path = require('path');

const app = express();

// Basic Express setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from dist/public
app.use(express.static(path.join(__dirname, '../dist/public')));

// Basic routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and message are required' 
      });
    }

    // For now, just log the contact (you can add email service later)
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon." 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

// CV download endpoint
app.get('/api/download-cv', (req, res) => {
  const cvPath = path.join(__dirname, '../server/public/Muhammad-Talha-CV.pdf');
  res.download(cvPath, 'Muhammad-Talha-CV.pdf', (err) => {
    if (err) {
      res.status(404).json({ error: 'CV file not found' });
    }
  });
});

// Catch-all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

module.exports = app;
