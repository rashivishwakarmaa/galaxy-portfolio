import React from "react";

const achievements = [
  {
    id: 1,
    name: "RISE Internship",
    icon: "🌟",
    description: "Completed RISE Internship fostering my skills in full-stack development.",
  },
  {
    id: 2,
    name: "Hackathons",
    icon: "🏆",
    description: "Won & participated in multiple hackathons focused on AI and Web development.",
  },
  {
    id: 3,
    name: "AI & Cloud Certifications",
    icon: "🎖️",
    description: "Certified in multiple AI and cloud computing courses.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" aria-labelledby="achievements-title">
      <h2
        id="achievements-title"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#8b5cf6",
        }}
      >
        Achievements & Certifications
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
          maxWidth: 900,
          margin: "0 auto",
          color: "#fff",
        }}
      >
        {achievements.map(({ id, name, icon, description }) => (
          <div
            key={id}
            tabIndex={0}
            role="group"
            aria-label={name}
            style={{
              backgroundColor: "#111123",
              borderRadius: 15,
              padding: "1.5rem",
              width: 260,
              minHeight: 140,
              boxShadow: "0 0 15px #8b5cf6",
              textAlign: "center",
              cursor: "default",
              userSelect: "none",
              transition: "box-shadow 0.3s ease",
            }}
            onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 25px #facc15")}
            onBlur={(e) => (e.currentTarget.style.boxShadow = "0 0 15px #8b5cf6")}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 25px #facc15")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 15px #8b5cf6")}
          >
            <div
              aria-hidden="true"
              style={{
                fontSize: "3rem",
                marginBottom: "0.6rem",
              }}
            >
              {icon}
            </div>
            <h3 style={{ fontFamily: "'Orbitron', sans-serif", marginBottom: 10 }}>{name}</h3>
            <p style={{ fontSize: "1rem", color: "#d1d5db" }}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;