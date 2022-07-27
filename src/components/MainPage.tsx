import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Accent: React.FC<{ children: string }> = ({ children }) => (
  <span className="text-lg text-accent whitespace-nowrap"> {children}</span>

)


const AnimatedText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(index);
      setIndex((index + 1) % words.length);
    }, 2000);

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
      className="font-light"
      variants={sentence}
      key={words[index]}
    >
      {
        words[index].split('').map((char) => {
          return (
            <motion.span key={char + '-' + index} initial="hidden" animate="visible" variants={letter}>
              {char}
            </motion.span>
          );
        })
      }
    </motion.span>
  )
}
export default function MainPage() {

  const texts = [
    "reliable",
    "fast",
    "secure",
  ]

  return (
    <>
      <motion.div id="hero" className="mb-32">
        <p className="text-neutral-content text-sm lg:text-md mb-2">Hi, my name is</p>
        <p className="text-info text-md sm:text-xl lg:text-4xl mb-6">Mustafa Zaki Assagaf</p>
        {/* TODO: make reliable animation to change to other words */}
        <h1 className="text-primary-content text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8">I build <br /> <AnimatedText words={texts} /> <br />  web technologies</h1>
        <p className="mb-12 font-light text-accent-content md:w-[60%]">
          I'm a <Accent>Backend Engineer</Accent>, <Accent>Cloud Engineer</Accent> and <Accent>Infrastructure Engineer</Accent> who use <Accent>Golang</Accent>, <Accent>Rust</Accent> and <Accent>TypeScript</Accent>

        </p>
        <a className="btn btn-primary md:text-lg mr-4">See My Projects</a>
        <a className="btn btn-info btn-outline text-sm md:text-md  text-md"> CONTACT ME!</a>

      </motion.div>

      <div id="about">
        <p className="text-info lg:text-xl mb-8">About Me</p>
      </div>
    </>
  );
}
