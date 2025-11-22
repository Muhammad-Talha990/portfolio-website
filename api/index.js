// Vercel serverless function for your portfolio API
const express = require('express');
const path = require('path');
const fs = require('fs');

// Load Resend if available (optional dependency)
let Resend;
try {
  const resendModule = require('resend');
  Resend = resendModule.Resend || resendModule.default || resendModule;
} catch (e) {
  // Resend not installed, email functionality will be disabled
  console.log('Resend package not found. Email notifications disabled.');
}

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

    // Log the contact submission
    console.log('📧 New contact form submission:', { 
      name, 
      email, 
      subject, 
      message,
      timestamp: new Date().toISOString()
    });
    
    // Send email notification if RESEND_API_KEY is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER;
    
    if (resendApiKey && recipientEmail && Resend) {
      try {
        const resend = new Resend(resendApiKey);
        
        // Send email to you
        await resend.emails.send({
          from: 'Portfolio Contact Form <onboarding@resend.dev>', // Change this to your verified domain
          to: recipientEmail,
          subject: subject ? `Portfolio Contact: ${subject}` : `New Contact from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Received at: ${new Date().toLocaleString()}</small></p>
          `,
        });
        
        console.log('✅ Email sent successfully to', recipientEmail);
      } catch (emailError) {
        console.error('❌ Failed to send email:', emailError.message);
        // Don't fail the request if email fails - still return success
      }
    } else if (!resendApiKey || !recipientEmail) {
      console.warn('⚠️ Email not configured. Set RESEND_API_KEY and RECIPIENT_EMAIL environment variables in Vercel.');
    }
    
    res.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon.",
      id: Date.now()
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
