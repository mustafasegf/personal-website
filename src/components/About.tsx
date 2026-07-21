import { site } from "@/data/site";

const link = "font-semibold underline underline-offset-4";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b-2 bg-brand-blue px-5 py-14 sm:px-10">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">About Me</h2>
        <p>
          My name is Mustafa and I love to do web development. I mostly do backend engineering, but
          I also can do frontend engineering. Other than that, I also deal with cloud engineering
          using GCP and AWS. I've also played with system engineering projects.
        </p>
        <p>
          Right now I'm a platform engineer at{" "}
          <a href="https://aiand.com/" target="_blank" rel="noopener noreferrer" className={link}>
            AI&
          </a>
          , keeping on-prem GPU servers reliable with end-to-end telemetry, Kubernetes, and
          infrastructure as code. You can also checkout my latest project,{" "}
          <a href={`${site.github}/neoman`} target="_blank" rel="noopener noreferrer" className={link}>
            Neoman
          </a>
          ! Postman-like application on the terminal.
        </p>
      </div>
    </section>
  );
}
