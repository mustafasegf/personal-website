import * as React from 'react';
import { motion } from 'framer-motion';

const Accent: React.FC<{ children: string }> = ({ children }) => (
  <span className="text-lg text-accent"> {children}</span>

)

export default function MainPage() {


  return (
    <>
      <div id="hero" className="mb-32">
        <p className="text-neutral-content text-sm lg:text-md mb-2">Hi, my name is</p>
        <p className="text-info text-md sm:text-xl lg:text-4xl mb-6">Mustafa Zaki Assagaf</p>
        {/* TODO: make reliable animation to change to other words */}
        <p className="text-primary-content text-4xl sm:text-5xl lg:text-6xl font-semibold mb-8">I build reliable web technologies</p>
        <p className="mb-12 font-light text-accent-content text-justify md:w-[60%]">
          {/* ! I'm a backend engineer that also learn cloud and infrastructure. Right now, I'm a student at
          Faculty of Computer Science of the University of Indonesia. I'm proficient in golang and
          backend technologies.
          */}
          I'm a <Accent>Backend Engineer</Accent>, <Accent>Cloud Engineer</Accent> and <Accent>Infrastructure Engineer</Accent> who use <Accent>Golang</Accent>, <Accent>Rust</Accent> and <Accent>TypeScript</Accent>

        </p>
        <a className="btn btn-primary md:text-lg mr-4">See My Projects</a>
        <a className="btn btn-info btn-outline text-sm md:text-md  text-md"> CONTACT ME!</a>
      </div>

      <div id="about">
        <p className="text-info lg:text-xl mb-8">About Me</p>
      </div>
    </>
  );
}
