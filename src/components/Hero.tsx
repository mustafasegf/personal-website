import { useState } from "react";
import { site } from "@/data/site";
import { brutalButton } from "@/components/brutal";
import { ArrowDownIcon, MailIcon } from "@/components/icons";

export function Hero() {
  const [shaded, setShaded] = useState(false);

  return (
    <section id="top" className="grid border-b-2 md:grid-cols-12">
      <div className="flex flex-col justify-center gap-6 px-5 py-14 sm:px-10 md:col-span-7 md:py-20 lg:px-16">
        <p className="text-lg">Hi, my name is</p>
        <h1 className="max-w-xl text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl lg:leading-snug">
          {site.name}. Backend, Cloud, and System Engineer.
        </h1>
        <p className="text-lg">I craft fast, reliable, and secure web application for a living</p>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <a href="#projects" className={brutalButton({ className: "px-8" })}>
            Learn More
            <ArrowDownIcon />
          </a>
          <a href="#contact" className={brutalButton({ tone: "outline", className: "px-8" })}>
            Contact Me
            <MailIcon />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 border-t-2 bg-brand-yellow px-6 py-12 md:col-span-5 md:border-t-0 md:border-l-2">
        <div className="relative w-full max-w-sm sm:max-w-md">
          <img
            src="/images/hero-illustration.png"
            alt="Cartoon avatar of Mustafa surrounded by TypeScript, Rust, and Go stickers"
            width="603"
            height="641"
            loading="eager"
            className="w-full"
          />
          {/* viewBox matches the illustration's pixel size so the glasses stay on the eyes at any scale */}
          <svg
            aria-hidden="true"
            viewBox="0 0 603 641"
            className={`pointer-events-none absolute inset-0 h-full w-full select-none transition-opacity duration-300 ${shaded ? "opacity-100" : "opacity-0"}`}
          >
            <text x="277" y="352" fontSize="105" textAnchor="middle" dominantBaseline="central">
              🕶
            </text>
          </svg>
        </div>

        <button
          type="button"
          onClick={() => setShaded((s) => !s)}
          className={brutalButton({ tone: "outline", shape: "pill", className: "h-11 px-5" })}
        >
          {shaded ? "Remove Shade" : "Add Shade"} 🕶
        </button>
      </div>
    </section>
  );
}
