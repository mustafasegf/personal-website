import { experience } from "@/data/site";
import { LaptopIcon } from "@/components/icons";

export function Experience() {
  return (
    <section id="experience" className="grid scroll-mt-16 border-b-2 md:grid-cols-12">
      <div className="space-y-4 border-b-2 bg-brand-yellow px-5 py-12 sm:px-10 md:col-span-4 md:border-r-2 md:border-b-0 lg:col-span-3">
        <div className="md:sticky md:top-24 md:space-y-4">
          <LaptopIcon />
          <h2 className="text-2xl font-semibold sm:text-3xl">My experiences</h2>
          <p className="text-sm leading-relaxed">
            List of all of my professional experiences, totalling around 5 years of experience.
          </p>
        </div>
      </div>

      <div className="px-5 py-12 sm:px-10 md:col-span-8 lg:col-span-9">
        <ol className="relative ml-2 space-y-10 border-l-2">
          {experience.map((e) => (
            <li key={`${e.company}-${e.range}`} className="relative pl-8">
              <span
                className="absolute top-1 -left-2 size-4 rounded-full border-2 border-border bg-brand-salmon"
                aria-hidden="true"
              />
              <time className="text-sm text-muted-foreground">{e.range}</time>
              <h3 className="mt-1 text-lg font-semibold">
                {e.role}{" "}
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-2 underline-offset-4 hover:decoration-brand-salmon"
                  >
                    @{e.company}
                  </a>
                ) : (
                  <span>@{e.company}</span>
                )}
              </h3>
              {e.desc && <p className="mt-1 text-sm italic">{e.desc}</p>}
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
