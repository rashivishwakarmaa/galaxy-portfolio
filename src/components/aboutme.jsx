import React from "react";

const AboutMe = () => {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2
        id="about-title"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "1rem",
          color: "#8b5cf6",
        }}
      >
        About Me
      </h2>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        fontSize: "1.2rem",
        lineHeight: "1.6",
        color:"#d1d5db",
      }}>
        <ul style={{listStyleType: "none"}}>
          <li style={{marginBottom:"0.75rem", display:"flex", alignItems:"center"}}>
            <span role="img" aria-label="star" style={{marginRight:"8px"}}>⭐</span>
            Building meaningful digital experiences by crafting clean, efficient code.
          </li>
          <li style={{marginBottom:"0.75rem", display:"flex", alignItems:"center"}}>
            <span role="img" aria-label="planet" style={{marginRight:"8px"}}>🪐</span>
            Exploring domains: CalmConnect app, AI integration, Cloud solutions.
          </li>
          <li style={{marginBottom:"0.75rem", display:"flex", alignItems:"center"}}>
            <span role="img" aria-label="rocket" style={{marginRight:"8px"}}>🚀</span>
            Current: B.Tech IT at MUJ, RISE Intern.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;