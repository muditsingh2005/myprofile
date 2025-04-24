import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const FadeInAnimation = ({ children, delay = 0.2, duration = 0.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration,
            delay: delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
