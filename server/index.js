require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public"))); // serve resume and front assets if needed 

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `New message from portfolio contact form: ${name}`,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
      html: `<p>You received a message from <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>):</p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});