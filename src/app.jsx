import React, { useEffect, useState } from "react";

import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Loading from "./components/Loading";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Starfield from "./components/starfield.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="app">
          <Starfield />
          <Hero />
          <AboutMe />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;