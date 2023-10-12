const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // Add this line
const path = require('path');

// Initialize Express app
const app = express();

app.use(express.static('public'));

// Middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactDB', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.log('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Create a schema and model for contacts
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Handle form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Save to MongoDB
  const newContact = new Contact({ name, email, message });
  await newContact.save()
    .then(item => {
      res.send("Item saved to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });

  // Send email notification (optional, uncomment if needed)
  /*
  const transporter = nodemailer.createTransport({ /* your email service settings * / });
  await transporter.sendMail({
    from: 'no-reply@yourdomain.com',
    to: 'your-professional-email@domain.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  });
  */
});

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
