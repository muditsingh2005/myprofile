import React, { useEffect, useRef } from "react";
import "./Meteors.css";

export const Meteors = ({ number = 20 }) => {
  const meteorRef = useRef(null);

  useEffect(() => {
    const container = meteorRef.current;

    for (let i = 0; i < number; i++) {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.left = `${Math.random() * 100}vw`;

      const duration = Math.random() * 3 + 3; // between 3s and 6s
      const delay = Math.random() * 5; // up to 5s

      meteor.style.animationDuration = `${duration}s`;
      meteor.style.animationDelay = `${delay}s`;

      meteor.style.animationIterationCount = "infinite";

      container.appendChild(meteor);
    }
  }, [number]);

  return <div className="meteor-container" ref={meteorRef}></div>;
};
