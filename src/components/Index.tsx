import * as React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

export const Accent: React.FC<{ children: string }> = ({ children }) => (
  <span className="text-lg text-secondary whitespace-nowrap"> {children}</span>
);

export interface SmallCardsProps {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  github: string;
}

export const SmallCards: React.FC<SmallCardsProps> = ({
  title,
  desc,
  tags = [],
  href,
  github,
}) => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 1, y: 100 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="hidden"
      variants={boxVariant}
      className="card mb-4 lg:mr-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3%-1rem)] bg-base-200 shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions items-center justify-end">
          <div className="flex justify-end gap-4">
            {github && (
              <a target="_blank" href={github}>
                <Icon
                  fontSize={30}
                  className="hover:text-info"
                  icon="iconoir:github"
                />
              </a>
            )}
            {href && (
              <a target="_blank" href={href}>
                <Icon
                  fontSize={30}
                  className="hover:text-info"
                  icon="akar-icons:link-out"
                />
              </a>
            )}
          </div>
          <div className="card-actions mr-0 ml-auto gap-2">
            {tags.map((tag, i) => (
              <div
                key={i}
                className=" text-neutral-content hover:text-secondary badge badge-outline select-none"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export interface CardsProps {
  title: string;
  img: string;
  alt: string;
  desc: string;
  tags: string[];
  href: string;
  github: string;
}

export const Cards: React.FC<CardsProps> = ({
  title,
  img,
  alt,
  desc,
  tags,
  href,
  github,
}) => {
  return (
    <div className="card mb-4 lg:mr-4 w-full lg:w-[calc(33.3%-1rem)] bg-base-200 shadow-xl">
      <figure className="">
        <img alt={alt} src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions mb-4 justify-end">
          {tags.map((tag, i) => (
            <div key={i} className="text-neutral-content hover:text-secondary badge badge-outline select-none">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions">
          <a target="_blank" href={href} className="btn btn-primary grow">
            <span className="mr-2">Open</span>
            <Icon fontSize={18} icon="charm:link-external" />
          </a>
          <a
            target="_blank"
            href={github}
            className="btn btn-secondary btn-outline basis-1/2"
          >
            <span className="mr-2">Github</span>
            <Icon fontSize={18} icon="charm:github" />
          </a>
        </div>
      </div>
    </div>
  );
};

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
