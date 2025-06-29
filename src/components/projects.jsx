import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    name: "CalmConnect",
    description:
      "A mental wellness app connecting users with mindfulness tools and supportive community features.",
    techStack: ["React", "Flask", "AI APIs"],
    github: "https://github.com/yourusername/calmconnect",
    liveDemo: "https://calmconnect.example.com",
    image: "https://i.imgur.com/Q9R9fRY.png", // placeholder planet image or icon URL
  },
  {
    id: 2,
    name: "CalmChat",
    description:
      "A floating chatbot assistant embedded on this portfolio for interactive user support.",
    techStack: ["React", "Node.js", "Chatbot APIs"],
    github: "https://github.com/yourusername/calmchat",
    liveDemo: "https://calmchat.example.com",
    image: "https://i.imgur.com/4AiXzf8.png",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "This very portfolio site showcasing my skills, projects, and achievements in a galaxy theme.",
    techStack: ["React", "Node.js", "Canvas API"],
    github: "https://github.com/yourusername/galaxy-portfolio",
    liveDemo: "https://yourusername.github.io/galaxy-portfolio",
    image: "https://i.imgur.com/hdyhJr7.png",
  },
];

const Projects = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2
        id="projects-title"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: "#8b5cf6",
        }}
      >
        Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          zIndex: 1,
          position: "relative",
        }}
      >
        {projectsData.map(({ id, name, image }) => (
          <div
            key={id}
            role="button"
            tabIndex={0}
            onClick={() => setModalData(projectsData.find((p) => p.id === id))}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setModalData(projectsData.find((p) => p.id === id));
            }}
            aria-label={`View details for project ${name}`}
            style={{
              cursor: "pointer",
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 0 15px #8b5cf6",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: "600",
              textShadow: "0 0 5px #000",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.boxShadow = "0 0 30px #8b5cf6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 15px #8b5cf6";
            }}
          >
            <span
              style={{
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "50%",
                padding: 10,
                fontSize: "1rem",
                textAlign: "center",
                width:"100%",
                userSelect:"none"
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>

      {modalData && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
            width: "100vw",
            height: "100vh",
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
          onClick={() => setModalData(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setModalData(null);
          }}
          tabIndex={-1}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#111123",
              borderRadius: 15,
              maxWidth: 600,
              maxHeight: "80vh",
              overflowY: "auto",
              padding: 25,
              color: "#d1d5db",
              boxShadow: "0 0 30px #3b82f6",
            }}
          >
            <h3 id="modal-title" style={{ fontFamily: "'Orbitron', sans-serif", marginBottom: 12 }}>
              {modalData.name}
            </h3>
            <p style={{ marginBottom: 15 }}>{modalData.description}</p>
            <div style={{ marginBottom: 15 }}>
              <strong>Tech Stack: </strong>
              {modalData.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    backgroundColor: "#3b82f6",
                    padding: "5px 10px",
                    borderRadius: "15px",
                    color: "#fff",
                    fontSize: "0.9rem",
                    marginRight: "8px",
                    display: "inline-block",
                    marginBottom: "5px",
                    userSelect:"none"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 15 }}>
              <a
                href={modalData.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#8b5cf6",
                  padding: "10px 15px",
                  borderRadius: "30px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                GitHub
              </a>
              <a
                href={modalData.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#3b82f6",
                  padding: "10px 15px",
                  borderRadius: "30px",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
               Live Demo
              </a>
            </div>
            <button
              onClick={() => setModalData(null)}
              style={{
                marginTop: 20,
                backgroundColor: "#facc15",
                border: "none",
                borderRadius: "30px",
                padding: "10px 20px",
                cursor: "pointer",
                fontWeight: "600",
                color: "#000",
                boxShadow: "0 0 10px #facc15",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;