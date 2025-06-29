import React from "react";

const CORE_SKILLS = ["Python", "JavaScript"];
const ORBITING_SKILLS = [
  "React",
  "Flask",
  "HTML",
  "CSS",
  "AI APIs",
  "Git",
  "Cloud",
];

const size = 220; // container size in px
const coreRadius = 50;
const orbitRadius = 90;

const angleStep = (2 * Math.PI) / ORBITING_SKILLS.length;

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-title" style={{position:"relative"}}>
      <h2
        id="skills-title"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#8b5cf6",
        }}
      >
        Skills Galaxy
      </h2>

      <div
        style={{
          width: size,
          height: size,
          margin: "0 auto",
          position: "relative",
        }}
        aria-label="Skill orbit diagram"
      >
        {/* Core skills center */}
        <div
          style={{
            position: "absolute",
            left: size / 2 - coreRadius,
            top: size / 2 - coreRadius,
            width: coreRadius * 2,
            height: coreRadius * 2,
            background:
              "radial-gradient(circle at center, #8b5cf6, #3b82f6)",
            borderRadius: "50%",
            boxShadow: "0 0 20px #8b5cf6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.1rem",
            flexDirection: "column",
            userSelect:"none"
          }}
        >
          {CORE_SKILLS.map((skill) => (
            <div key={skill}>{skill}</div>
          ))}
        </div>

        {/* Orbiting satellites */}
        {ORBITING_SKILLS.map((skill, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = size / 2 + orbitRadius * Math.cos(angle);
          const y = size / 2 + orbitRadius * Math.sin(angle);

          return (
            <div
              key={skill}
              style={{
                position: "absolute",
                left: x - 25,
                top: y - 25,
                width: 50,
                height: 50,
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                boxShadow: "0 0 10px #3b82f6",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: "600",
                userSelect:"none",
                cursor: "default",
                transition: "box-shadow 0.3s ease",
              }}
              title={skill}
              aria-label={`Skill: ${skill}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px #facc15";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 10px #3b82f6";
              }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;