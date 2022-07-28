import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Accent: React.FC<{ children: string }> = ({ children }) => (
  <span className="text-lg text-secondary whitespace-nowrap"> {children}</span>
);

export const AnimatedText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [index]);

  const sentence = {
    hidden: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.025,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className="text-secondary"
      variants={sentence}
      key={words[index]}
    >
      {words[index].split("").map((char, i) => {
        return (
          <motion.span key={words[index] + "-" + i} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
