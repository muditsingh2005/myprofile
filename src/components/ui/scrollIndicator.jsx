import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious();
    const diff = current - previous;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <>
      <motion.div
        className="scroll-indicator"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="scroll-direction">
        Scroll Direction: {scrollDirection}
      </div>
    </>
  );
};

export default ScrollIndicator;
