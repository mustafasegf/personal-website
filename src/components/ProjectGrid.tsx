import { projects, type Project } from "@/data/site";
import { brutalButton } from "@/components/brutal";
import { TagFilterChip } from "@/components/TagBadge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article data-tags={project.tags.join("|")} className={`card-brutal flex flex-col gap-3 p-5 ${project.color}`}>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagFilterChip key={tag} tag={tag} />
        ))}
      </div>
      <p className="text-sm leading-relaxed">{project.desc}</p>
      <div className="mt-auto flex gap-2 pt-2">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className={brutalButton({ size: "icon" })}
          >
            <ExternalLinkIcon />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className={brutalButton({ size: "icon" })}
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
      <h2 className="pb-2 text-center text-2xl font-semibold sm:text-3xl">Other interesting projects</h2>
      <p className="pb-6 text-center text-sm text-muted-foreground">
        Click a tag to filter, click it again to clear it.
      </p>
      <p data-filter-status role="status" aria-live="polite" className="hidden pb-6 text-center text-sm">
        <span data-filter-count />
        <button
          type="button"
          data-filter-clear
          className="ml-2 cursor-pointer font-medium underline underline-offset-4"
        >
          Clear filter
        </button>
      </p>
      <div data-project-grid className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
