import React, { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "AI Enthusiast",
  "Cloud Learner"
];

function useTypingEffect(words, speed = 150, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
    }
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  useEffect(() => {
    // blinking cursor
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 530);
    return () => clearInterval(timeout2);
  }, []);

  return { text: words[index].substring(0, subIndex), blink };
}
<a
  href="/resume.pdf"
  download
  style={{
    display: "inline-block",
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#8b5cf6",
    borderRadius: "30px",
    color: "#fff",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 0 15px #8b5cf6",
    transition: "background-color 0.3s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8b5cf6")}
>
  Download Resume
</a>

const Hero = () => {
  const { text, blink } = useTypingEffect(roles);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingTop: "120px",
        textAlign: "center",
        color: "#fff",
        zIndex: 1,
        userSelect: "none",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontFamily: "'Orbitron', sans-serif",
          color: "#8b5cf6",
          marginBottom: "0.5rem",
        }}
      >
        Hi, I’m Rashi Vishwakarma 🚀
      </h1>
      <p style={{
        fontSize: "1.5rem",
        maxWidth: "600px",
        margin: "0 auto",
        marginBottom: "1.5rem",
        color: "#d1d5db",
      }}>
        Exploring the Universe of Technology, One Project at a Time.
      </p>
      <p style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "1.7rem",
        color: "#3b82f6",
        minHeight: "2.2rem"
      }}>
        {text}
        <span style={{opacity: blink ? 1 : 0}}>|</span>
      </p>

      {/* Floating planets */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "10%",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, #8b5cf6, #3b82f6)",
          boxShadow: "0 0 15px #8b5cf6",
          animation: "orbit 12s linear infinite",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "15%",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, #facc15, #eab308)",
          boxShadow: "0 0 15px #facc15",
          animation: "orbit 15s linear infinite reverse",
        }}
      />
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;