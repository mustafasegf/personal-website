import React from 'react';

export default function MainPage() {

  return (
    <>
      <div id="hero" className="mb-32">
        <p className="text-info lg:text-xl mb-8">Hi, my name is</p>
        <p className="text-info text-2xl sm:text-4xl lg:text-6xl font-semibold mb-4">Mustafa Zaki Assagaf</p>
        <p className="text-neutral-content text-2xl sm:text-4xl lg:text-6xl font-semibold mb-8">I build web technologies</p>
        <p className="mb-12 text-justify md:w-[60%]">
          I'm a backend engineer that also learn cloud and infrastructure. Right now, I'm a student at
          Faculty of Computer Science of the University of Indonesia. I'm proficient in golang and
          backend technologies.
        </p>
        <a className="btn btn-primary">Contact me</a>
      </div>

      <div id="about">
        <p className="text-info lg:text-xl mb-8">About Me</p>
      </div>
    </>
  );
}
