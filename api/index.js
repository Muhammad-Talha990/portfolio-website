// Vercel serverless function for your portfolio API
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test endpoint
app.get('/test', (req, res) => {
  res.json({ 
    message: 'Portfolio API is working!', 
    timestamp: new Date().toISOString() 
  });
});

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and message are required' 
      });
    }

    // Log the contact submission (in production, you'd save to database or send email)
    console.log('📧 New contact form submission:', { 
      name, 
      email, 
      subject, 
      message,
      timestamp: new Date().toISOString()
    });
    
    // Simulate email sending (replace with real email service)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon.",
      id: Date.now() // Simple ID for reference
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error' 
    });
  }
});

// CV download endpoint
app.get('/download-cv', (req, res) => {
  try {
    // Try multiple possible paths for Vercel deployment
    const cvPaths = [
      path.join(__dirname, '../server/public/Muhammad-Talha-CV.pdf'),
      path.join(process.cwd(), 'server/public/Muhammad-Talha-CV.pdf'),
      path.join(process.cwd(), 'dist/public/Muhammad-Talha-CV.pdf')
    ];
    
    let cvPath = null;
    for (const testPath of cvPaths) {
      if (fs.existsSync(testPath)) {
        cvPath = testPath;
        break;
      }
    }
    
    if (cvPath) {
      res.download(cvPath, 'Muhammad-Talha-CV.pdf', (err) => {
        if (err) {
          console.error('CV download error:', err);
          res.status(500).json({ error: 'Failed to download CV' });
        }
      });
    } else {
      console.error('CV file not found at any of these paths:', cvPaths);
      res.status(404).json({ error: 'CV file not found' });
    }
  } catch (error) {
    console.error('CV download error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Export for Vercel serverless function
module.exports = app;
