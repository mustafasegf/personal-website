import * as React from "react";
import { useState, useEffect } from "react";
import type { FormEventHandler } from "react";
import { motion, AnimatePresence, useAnimation, useCycle } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

export const Accent: React.FC<{ children: string }> = ({ children }) => (
  <span className="text-lg text-secondary whitespace-nowrap"> {children}</span>
);

export const Hero: React.FC<{ texts: string[] }> = ({ texts }) => {
  const variantBuild = (i: number) => {
    return {
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 * i, duration: 0.5 },
      },
      hidden: { opacity: 0, y: 100 },
    };
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div id="hero" className="mb-16 scroll-mt-24">
      <motion.p
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(0)}
        className="text-neutral-content text-sm lg:text-md mb-2"
      >
        Hi, my name is
      </motion.p>
      <motion.h3
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(1)}
        className="text-info text-md sm:text-xl lg:text-4xl mb-6"
      >
        Mustafa Zaki Assagaf
      </motion.h3>
      <motion.h1
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(2)}
        className="text-4xl lg:text-7xl font-semibold mb-8"
      >
        I build <br />
        <AnimatedText words={texts} /> <br />
        <p className="break-words">web technologies</p>
      </motion.h1>
      <motion.p
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(3)}
        className="mb-12 md:w-[60%]"
      >
        {/* TODO add link to projects */}
        I'm a <Accent>Backend Engineer</Accent>, <Accent>Cloud Engineer</Accent>
        , and <Accent>System Engineer</Accent> who uses <Accent>Golang</Accent>,{" "}
        <Accent>Rust</Accent>, and <Accent>TypeScript</Accent>
      </motion.p>
      <motion.div
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(4)}
        className="flex flex-col sm:flex-row gap-2"
      >
        <a
          href="#showcase"
          className="btn btn-primary text-primary-content btn-block sm:btn-wide mr-4 "
        >
          Checkout My Work!
        </a>
        <a
          href="#about"
          className="btn btn-info btn-outline btn-block sm:btn-wide text-sm"
        >
          Learn More About Me!
        </a>
      </motion.div>
    </div>
  );
};

export const SkillChild: React.FC<{
  name: string;
  icon: string;
  index: number;
}> = ({ name, icon, index }) => {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index, duration: 0.3 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.li
      ref={ref}
      animate={control}
      initial="hidden"
      variants={variants}
      className="flex gap-2 mb-2 text-secondary"
    >
      {icon && <Icon fontSize={24} icon={icon} />}
      <span>{name}</span>
    </motion.li>
  );
};

export const Skills: React.FC<{ skills: { name: string; icon: string }[] }> = ({
  skills,
}) => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div id="skill" className="mb-16 scroll-mt-24">
      <motion.h3
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variants}
        className="text-2xl font-semibold mb-8"
      >
        Technologies that I use:
      </motion.h3>
      <p className="mb-4"></p>
      <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 list-disc list-inside">
        {skills.map(({ name, icon }, i) => (
          <SkillChild key={i} name={name} icon={icon} index={i} />
        ))}
      </ul>
    </div>
  );
};

export interface ShowcaseProps {
  title: string;
  img: string;
  alt: string;
  desc: string;
  tags: string[];
  href: string;
  github: string;
}

export interface ProjectsProps {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  github: string;
}

export const Showcase: React.FC<{
  showcase: ShowcaseProps[];
  projects: ProjectsProps[];
}> = ({ projects, showcase }) => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  const projectControl = useAnimation();
  const otherControl = useAnimation();

  const [projectRef, projectInView] = useInView();
  const [otherRef, otherInView] = useInView();

  useEffect(() => {
    if (projectInView) {
      projectControl.start("visible");
    }
  }, [projectControl, projectInView]);

  useEffect(() => {
    if (otherInView) {
      otherControl.start("visible");
    }
  }, [otherControl, otherInView]);

  return (
    <div id="showcase" className="mb-16 scroll-mt-24">
      <motion.h3
        ref={projectRef}
        animate={projectControl}
        initial="hidden"
        variants={variants}
        className="text-2xl font-semibold mb-8
        "
      >
        Some Stuff That I've Built
      </motion.h3>
      <div className="container mb-8">
        <div className="flex flex-wrap justify-center">
          {showcase.map(({ title, img, alt, desc, tags, href, github }, i) => (
            <Cards
              key={i}
              title={title}
              img={img}
              alt={alt}
              desc={desc}
              tags={tags}
              href={href}
              github={github}
            />
          ))}
        </div>
      </div>
      <motion.h3
        ref={otherRef}
        animate={otherControl}
        initial="hidden"
        variants={variants}
        className="text-2xl font-semibold mb-8"
      >
        Other Projects
      </motion.h3>
      <div className="flex flex-wrap justify-center">
        {projects.map(({ title, desc, tags, href, github }, i) => (
          <SmallCards
            key={i}
            title={title}
            desc={desc}
            tags={tags}
            href={href}
            github={github}
          />
        ))}
      </div>
    </div>
  );
};
export interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  range: string;
  href: string;
  list: string[];
}

export const ExperienceItems: React.FC<{
  title: string;
  company: string;
  location: string;
  range: string;
  href: string;
  list: string[];
}> = ({ title, company, location, range, href, list }) => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.li
      ref={ref}
      animate={control}
      initial="hidden"
      variants={variants}
      className="mb-10 ml-4"
    >
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-base-content bg-secondary" />
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {range}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}{" "}
        <a
          target="_blank"
          href={href}
          className="text-secondary hover:text-secondary-focus"
        >
          @ {company}{" "}
        </a>
      </h3>
      <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {list &&
          list.map((item, i) => (
            <div key={i} className="flex items-start gap-1 mb-2">
              <Icon
                fontSize={16}
                className="text-neutral-content min-w-fit mt-1"
                icon="dashicons:arrow-right-alt2"
              />
              <p className="text-base-content">{item}</p>
            </div>
          ))}
      </div>
    </motion.li>
  );
};

export const Experience: React.FC<{ experience: ExperienceProps[] }> = ({
  experience,
}) => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 100 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div id="experience" className="mb-16 scroll-mt-24">
      <motion.h3
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variants}
        className="text-2xl font-semibold mb-8"
      >
        My Experience
      </motion.h3>
      <div className="flex flex-wrap">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experience.map(
            ({ title, company, location, range, href, list }, i) => (
              <ExperienceItems
                key={i}
                title={title}
                company={company}
                location={location}
                range={range}
                href={href}
                list={list}
              />
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const variantBuild = (i: number) => {
    return {
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 * i, duration: 0.5 },
      },
      hidden: { opacity: 0, y: 100 },
    };
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div id="about" className="mb-16 scroll-mt-24">
      <motion.h3
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(0)}
        className="text-2xl font-semibold mb-4"
      >
        About Me
      </motion.h3>
      <div className="flex flex-col space-y-4">
        <div className="">
          <motion.p
            ref={ref}
            animate={control}
            initial="hidden"
            variants={variantBuild(1)}
            className="mb-4 mt-4"
          >
            <span className="font-semibold">Hi there! </span> <br />
            My name is Mustafa and I love to do web development. I mostly do
            backend engineering, but I also can do frontend engineering. Other
            than that, I also deal with cloud engineering using GCP and AWS.
            I've also played with system engineering projects.
          </motion.p>
          <motion.p
            ref={ref}
            animate={control}
            initial="hidden"
            variants={variantBuild(2)}
            className="mb-4"
          >
            Right now I'm{" "}
            <span className="text-secondary">actively looking for a job</span>{" "}
            and can do a remote full-time, or part-time job.
            <br />
            You can also checkout my latest project,{" "}
            <a className="link text-info" href="">
              Neoman
            </a>
            ! Postman-like aplication on the terminal.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC<{
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}> = ({ email, phone, linkedin, github }) => {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    className: "",
  });

  useEffect(() => {
    if (toast.visible) {
      setTimeout(() => {
        setToast({
          visible: false,
          message: "",
          className: "",
        });
      }, 3000);
    }
  }, [toast.visible]);

  const variantBuild = (i: number) => {
    return {
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.3 * i, duration: 0.5 },
      },
      hidden: { opacity: 0, y: 100 },
    };
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    interface FormData {
      name: string;
      email: string;
      message: string;
    }
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("https://mustafasegf.com/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setToast({
          visible: true,
          message: "Message sent successfully!",
          className: "alert alert-success",
        });
      }
      const text = await response.text();
      setToast({
        visible: true,
        message: text,
        className: "alert alert-error",
      });
    } catch (error) {
      setToast({
        visible: true,
        message: error.message,
        className: "alert alert-error",
      });
    }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div id="about" className="mb-16 scroll-mt-24">
      {toast.visible && (
        <div className="toast toast-top toast-center mt-12 z-20">
          <div className={toast.className}>
            <div>
              <span>{toast.message}</span>
            </div>
          </div>
        </div>
      )}
      <motion.h3
        ref={ref}
        animate={control}
        initial="hidden"
        variants={variantBuild(0)}
        className="text-2xl font-semibold mb-4"
      >
        Contact
      </motion.h3>
      <div className="flex flex-col space-y-4">
        <motion.p
          ref={ref}
          animate={control}
          initial="hidden"
          variants={variantBuild(1)}
          className="mb-4"
        >
          Contact me at
        </motion.p>

        <form onSubmit={submitHandler}>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Enter Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full "
              required={true}
            />
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full"
              required={true}
            />
            <label className="label">
              <span className="label-text">Enter Your Messge</span>
            </label>
            <textarea
              name="message"
              placeholder="Enter Your Email"
              className="input input-bordered min-h-16 mb-4 w-full"
              required={true}
            />
            <button className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= 20);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-1 bg-primary hover:bg-primary-focus rounded-full"
        >
          <Icon
            fontSize={24}
            className="hover:text-base-content"
            icon="ant-design:caret-up-filled"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

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
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, y: 100 },
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
      variants={variants}
      className="card mb-4 md:mr-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3%-1rem)] bg-base-300 shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="mb-4">{desc}</p>
        <div className="flex ">
          <div className="flex flex-row items-end justify-start gap-2">
            {href && (
              <a target="_blank" href={href}>
                <Icon
                  fontSize={24}
                  className="hover:text-info"
                  icon="akar-icons:link-out"
                />
              </a>
            )}
            {github && (
              <a target="_blank" href={github}>
                <Icon
                  fontSize={24}
                  className="hover:text-info"
                  icon="iconoir:github"
                />
              </a>
            )}
          </div>
          <div className="card-actions justify-end flex-wrap mr-0 ml-auto gap-2">
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
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
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
      variants={variants}
      className="card mb-4 md:mr-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3%-1rem)] bg-base-300 shadow-xl"
    >
      <figure className="">
        <img className="w-full" alt={alt} src={img} />
      </figure>
      <div className="card-body p-4 lg:p-8">
        <h2 className="card-title">{title}</h2>
        <p className="mb-4">{desc}</p>
        <div className="card-actions mb-4 justify-end">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="text-neutral-content hover:text-secondary badge badge-outline select-none"
            >
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
            className="btn btn-secondary btn-outline grow"
          >
            <span className="mr-2">Github</span>
            <Icon fontSize={18} icon="charm:github" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const AnimatedText: React.FC<{ words: string[] }> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % words.length);
      setWord(words[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  const sentence = {
    initial: {
      opacity: 0,
      y: -30,
      transition: {},
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.span
        initial="initial"
        animate="animate"
        exit="exit"
        variants={sentence}
        key={word}
        className="text-secondary absolute"
      >
        {word}
      </motion.span>
    </AnimatePresence>
  );
};
