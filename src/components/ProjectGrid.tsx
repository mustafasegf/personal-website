import { projects, type Project } from "@/data/site";
import { brutalButton } from "@/components/brutal";
import { TagFilterChip } from "@/components/TagBadge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-tags={project.tags.join("|")} className={`card-brutal flex flex-col gap-3 p-5 ${project.color}`}>
      <h3 className="font-heading text-balance text-lg font-semibold leading-tight tracking-item-heading">{project.title}</h3>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagFilterChip key={tag} tag={tag} />
        ))}
      </div>
      <p className="text-pretty text-sm leading-relaxed">{project.desc}</p>
      <div className="mt-auto flex gap-2 pt-2">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className={brutalButton({ size: "icon-lg" })}
          >
            <ExternalLinkIcon />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className={brutalButton({ size: "icon-lg" })}
        >
          <GitHubIcon />
        </a>
      </div>
    </article>
  );
}

export function ProjectGrid() {
  return (
    <section className="border-b-2 px-5 py-12 sm:px-10">
      <h2 className="pb-2 text-center font-heading text-balance text-2xl font-semibold leading-section-heading tracking-section-heading sm:text-3xl">
        Other interesting projects
      </h2>
      <div className="flex h-12 items-center justify-center text-center text-sm">
        <p data-filter-helper className="text-muted-foreground">
          Click a tag to filter, click it again to clear it.
        </p>
        <p data-filter-status role="status" aria-live="polite" className="hidden items-center justify-center gap-2 tabular-nums">
          <span data-filter-count />
          <button
            type="button"
            data-filter-clear
            className="touch-target inline-flex cursor-pointer items-center justify-center font-medium underline underline-offset-4"
          >
            Clear filter
          </button>
        </p>
      </div>
      <div data-project-grid className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
