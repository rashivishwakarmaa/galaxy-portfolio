import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h;
    let stars = [];
    //let FPS = 60;
    let numStars = 150;

    function init() {
      resize();
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 1.1,
          alpha: Math.random(),
          dAlpha: (Math.random() * 0.02 + 0.005),
        });
      }
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FFFFFF";

      stars.forEach(star => {
        star.alpha += star.dAlpha;
        if (star.alpha <= 0) {
          star.alpha = 0;
          star.dAlpha = -star.dAlpha;
        }
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.dAlpha = -star.dAlpha;
        }
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function loop() {
      draw();
      requestAnimationFrame(loop);
    }

    window.addEventListener("resize", () => {
      resize();
    });

    init();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(180deg, #0d0d2b 0%, #000000 100%)",
      }}
      aria-hidden="true"
    />
  );
};

export default Starfield;