require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Booking endpoint
app.post('/api/bookings', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      specialRequests,
      roomType,
      checkIn,
      checkOut,
      adults,
      children,
    } = req.body;

    // Email to hotel
    const hotelMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.HOTEL_EMAIL,
      subject: `New Booking Request - ${roomType}`,
      html: `
        <h2>New Booking Request</h2>
        <h3>Guest Information:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Booking Details:</h3>
        <p><strong>Room Type:</strong> ${roomType}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Number of Guests:</strong> ${adults} adults, ${children} children</p>
        
        ${specialRequests ? `<h3>Special Requests:</h3><p>${specialRequests}</p>` : ''}
      `,
    };

    // Confirmation email to guest
    const guestMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Request Received - LuxStay Hotel',
      html: `
        <h2>Thank you for your booking request!</h2>
        <p>Dear ${fullName},</p>
        <p>We have received your booking request for ${roomType} at LuxStay Hotel.</p>
        
        <h3>Booking Details:</h3>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Number of Guests:</strong> ${adults} adults, ${children} children</p>
        
        <p>Our team will review your request and get back to you shortly with confirmation and further details.</p>
        
        <p>If you have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>LuxStay Hotel Team</p>
      `,
    };

    // Send emails
    await transporter.sendMail(hotelMailOptions);
    await transporter.sendMail(guestMailOptions);

    res.status(200).json({ message: 'Booking request received successfully' });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).json({ message: 'Error processing booking request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 