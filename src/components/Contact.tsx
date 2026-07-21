import { useRef, useState } from "react";
import { site } from "@/data/site";
import { brutalButton } from "@/components/brutal";
import { CopyIcon, GitHubIcon, LinkedInIcon, MailIcon, XTwitterIcon } from "@/components/icons";

const socials = [
  { name: "GitHub", href: site.github, Icon: GitHubIcon },
  { name: "X (Twitter)", href: site.x, Icon: XTwitterIcon },
  { name: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
];

function CopyEmailButton() {
  const [label, setLabel] = useState("Copy address");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setLabel("Copied!");
    } catch {
      setLabel(site.email);
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("Copy address"), 2000);
  };

  return (
    <button type="button" onClick={copy} className={brutalButton({ tone: "outline" })}>
      <CopyIcon />
      {label}
    </button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="grid scroll-mt-16 md:grid-cols-12">
      <div className="flex flex-col justify-center bg-brand-pink px-5 py-14 sm:px-10 md:col-span-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Let's Talk</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed">
          If you want to reach out or just want to say hi, the easiest way is to email me directly.
          I read everything, even the weird ones.
        </p>

        <div className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <a href={`mailto:${site.email}`} className={brutalButton({ className: "gap-3" })}>
            <MailIcon />
            {site.email}
          </a>
          <CopyEmailButton />
        </div>
      </div>

      <div className="border-t-2 bg-brand-blue px-5 py-14 sm:px-10 md:col-span-4 md:border-t-0 md:border-l-2">
        <h2 className="text-2xl font-semibold sm:text-3xl">Connect on Socials</h2>
        <p className="mt-3 text-sm">You can also reach me through these links</p>
        <ul className="mt-8 flex flex-wrap gap-4 md:flex-col md:gap-6">
          {socials.map(({ name, href, Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3"
              >
                <span className={brutalButton({ tone: "outline", size: "icon-lg", shape: "pill" })}>
                  <Icon />
                </span>
                <span className="text-sm font-medium group-hover:underline group-hover:underline-offset-4">
                  {name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
