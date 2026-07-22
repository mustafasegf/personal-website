import { showcase, type Img } from "@/data/site";
import { brutalButton } from "@/components/brutal";
import { TagBadge } from "@/components/TagBadge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

export function FeaturedProjects({ images }: { images: Record<string, Img> }) {
  return (
    <section id="projects" className="scroll-mt-16 border-b-2">
      <h2 className="px-5 py-10 text-center">Stuff that I have built</h2>

      <div className="grid border-t-2 md:grid-cols-3">
        {showcase.map((p, i) => (
          <article
            key={p.title}
            className={`flex flex-col gap-4 p-6 sm:p-8 ${p.color} ${i > 0 ? "border-t-2 md:border-t-0 md:border-l-2" : ""}`}
          >
            <img
              src={images[p.title]?.src}
              alt={`Screenshot of ${p.title}`}
              width={images[p.title]?.width}
              height={images[p.title]?.height}
              loading="lazy"
              className="card-brutal aspect-video w-full bg-background object-cover object-top"
            />
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
            <h3 className="text-xl">{p.title}</h3>
            <p className="text-pretty text-sm leading-relaxed">{p.desc}</p>
            <div className="mt-auto flex gap-3 pt-2">
              {p.href && (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={brutalButton({ className: "h-11 flex-1" })}>
                  Open
                  <ExternalLinkIcon />
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} on GitHub`}
                className={brutalButton({
                  size: "icon-lg",
                  className: p.href ? "shrink-0" : "h-11 flex-1",
                })}
              >
                <GitHubIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
