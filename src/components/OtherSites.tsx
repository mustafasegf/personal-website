import { otherSites } from "@/data/site";
import { brutalButton } from "@/components/brutal";
import { ExternalLinkIcon } from "@/components/icons";

export function OtherSites() {
  return (
    <section id="sites" className="scroll-mt-16 border-t-2 border-b-2">
      <h2 className="px-6 py-10 text-center font-heading text-balance text-2xl font-semibold leading-section-heading tracking-section-heading sm:text-3xl">
        My Other Sites
      </h2>

      <div className="grid border-t-2 sm:grid-cols-2">
        {otherSites.map((s, i) => (
          <article
            key={s.href}
            className={`flex flex-col gap-4 p-6 sm:p-8 ${s.color} ${i > 0 ? "border-t-2 sm:border-t-0 sm:border-l-2" : ""}`}
          >
            <h3 className="font-heading text-balance text-xl font-semibold leading-tight tracking-item-heading">{s.title}</h3>
            <p className="text-pretty text-sm leading-relaxed">{s.desc}</p>
            <div className="mt-auto flex pt-2">
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={brutalButton({ width: "grow" })}>
                {new URL(s.href).host}
                <ExternalLinkIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
