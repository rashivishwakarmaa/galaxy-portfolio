import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setStatusMessage(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: "error", text: "Please fill all fields." });
      return;
    }

    // Submit to backend API
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatusMessage({ type: "error", text: data.message || "Failed to send message." });
      }
    } catch (error) {
      setStatusMessage({ type: "error", text: "Failed to send message." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2
        id="contact-title"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#8b5cf6",
        }}
      >
        Send a Signal
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#111123",
          maxWidth: 600,
          margin: "0 auto",
          padding: "2rem",
          borderRadius: 15,
          boxShadow: "0 0 20px #3b82f6",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          color: "#fff",
        }}
        noValidate
      >
        <label htmlFor="name" style={{ fontWeight: "600" }}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: 8,
            border: "none",
            fontSize: "1rem",
          }}
          required
          disabled={submitting}
          aria-required="true"
        />

        <label htmlFor="email" style={{ fontWeight: "600" }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: "10px",
            borderRadius: 8,
            border: "none",
            fontSize: "1rem",
          }}
          required
          disabled={submitting}
          aria-required="true"
        />

        <label htmlFor="message" style={{ fontWeight: "600" }}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          style={{
            padding: "10px",
            borderRadius: 8,
            border: "none",
            fontSize: "1rem",
            resize: "vertical",
          }}
          required
          disabled={submitting}
          aria-required="true"
        />

        <button type="submit" disabled={submitting} aria-label="Send message">
          {submitting ? "Sending..." : (
            <>
              Launch Rocket 🚀
            </>
          )}
        </button>

        {statusMessage && (
          <p
            style={{
              color: statusMessage.type === "success" ? "#a3e635" : "#ef4444",
              fontWeight: "600",
              textAlign: "center",
            }}
            role="alert"
          >
            {statusMessage.text}
          </p>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <a
            href="mailto:your.email@example.com"
            style={{ color: "#8b5cf6" }}
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            style={{ color: "#3b82f6" }}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            style={{ color: "#facc15" }}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐱 GitHub
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;