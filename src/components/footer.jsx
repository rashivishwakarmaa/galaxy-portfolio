import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0b0b23",
        textAlign: "center",
        padding: "15px 5px",
        color: "#d1d5db",
        fontSize: "0.9rem",
        position: "relative",
        zIndex: 10,
      }}
    >
      <p>
        Built with 💻 & ☕ by Rashi Vishwakarma{" "}
        <span role="img" aria-label="rocket">🚀</span>
      </p>
    </footer>
  );
};

export default Footer;