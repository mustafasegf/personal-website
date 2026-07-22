const link = "font-semibold underline underline-offset-4";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b-2 bg-brand-blue px-5 py-14 sm:px-10">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">About Me</h2>
        <p>
          My name is Mustafa and I love building things end to end. These days my focus is MLOps
          and platform engineering: GPU clusters, Kubernetes, and the plumbing that keeps models
          training and serving reliably. I'm also able to do backend and frontend engineering,
          work with cloud on GCP and AWS, and play with system engineering projects.
        </p>
        <p>
          Right now I'm a platform engineer at{" "}
          <a href="https://aiand.com/" target="_blank" rel="noopener noreferrer" className={link}>
            ai&
          </a>
          , keeping on-prem GPU servers reliable with end-to-end telemetry, Kubernetes, and
          infrastructure as code. You can also checkout my latest project, the{" "}
          <a href="https://8080.mus.sh" target="_blank" rel="noopener noreferrer" className={link}>
            Intel 8080 emulator
          </a>
          . It runs Space Invaders, and you can try it right in your browser!
        </p>
      </div>
    </section>
  );
}
