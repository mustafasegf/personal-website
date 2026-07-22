import { experience } from "@/data/site";
import { LaptopIcon } from "@/components/icons";

export function Experience() {
  return (
    <section id="experience" className="grid scroll-mt-16 border-b-2 md:grid-cols-12">
      <div className="space-y-4 border-b-2 bg-brand-yellow px-6 py-12 sm:px-10 md:col-span-4 md:border-r-2 md:border-b-0 lg:col-span-3">
        <div className="md:sticky md:top-24 md:space-y-4">
          <LaptopIcon />
          <h2 className="font-heading text-balance text-2xl font-semibold leading-section-heading tracking-section-heading sm:text-3xl">
            My experiences
          </h2>
          <p className="text-pretty text-sm leading-relaxed">
            List of all of my professional experiences, totalling around 5 years of experience.
          </p>
        </div>
      </div>

      <div className="px-6 py-12 sm:px-10 md:col-span-8 lg:col-span-9">
        <ol className="ml-2 space-y-10">
          {experience.map((e, i) => (
            <li key={`${e.company}-${e.range}`} className="relative pl-8">
              {/* per-item segments end the line at the last dot; -bottom-11 bridges the space-y-10 gap to the next dot */}
              {i < experience.length - 1 && <span className="absolute top-2 -left-0.5 w-0.5 -bottom-12 bg-border" aria-hidden="true" />}
              <span
                className="absolute top-2 -left-2 size-4 -translate-x-px rounded-full border-2 border-border bg-brand-salmon"
                aria-hidden="true"
              />
              <time className="text-sm text-muted-foreground tabular-nums">{e.range}</time>
              <h3 className="mt-2 font-heading text-balance text-lg font-semibold leading-tight tracking-item-heading">
                {e.role}{" "}
                {e.href ? (
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:decoration-brand-salmon"
                  >
                    @{e.company}
                  </a>
                ) : (
                  <span>@{e.company}</span>
                )}
              </h3>
              {e.desc && <p className="mt-2 text-sm italic">{e.desc}</p>}
              <ul className="mt-2 list-disc space-y-1.5 pl-6 text-sm leading-relaxed">
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
