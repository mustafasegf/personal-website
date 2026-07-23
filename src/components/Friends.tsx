import { friends } from "@/data/site";

// Fixed-width cells wrap into as many aligned columns as fit, with the last
// (partial) row centered. From the width where every entry measurably fits
// (~78px avg entry + gap), cells shrink to content so the list sits on one
// row; longer lists push that switch to a larger breakpoint, 14+ never gets it.
const rowAt: [number, string][] = [
  [7, "md:w-auto"],
  [9, "lg:w-auto"],
  [11, "xl:w-auto"],
  [13, "2xl:w-auto"],
];
const row = rowAt.find(([max]) => friends.length <= max)?.[1] ?? "";

export function Friends() {
  return (
    <section id="friends" className="scroll-mt-16 bg-brand-lavender px-6 py-14 text-center sm:px-10">
      <h2 className="font-heading text-balance text-2xl font-semibold leading-section-heading tracking-section-heading sm:text-3xl">My Friends</h2>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed">
        The internet is more fun with friends. Go visit their corners of it too.
      </p>

      <ul data-friends className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-5">
        {friends.map((f) => (
          <li key={f.href} data-friend className={`flex w-32 flex-col items-start gap-0.5 text-left ${row}`}>
            <a
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-2 underline-offset-4 hover:decoration-brand-salmon"
            >
              {f.name}
            </a>
            <span className="text-sm opacity-75">{new URL(f.href).host.replace(/^www\./, "")}</span>
          </li>
        ))}
        {/* Invisible cells complete a 3+-item last row so it stays column-aligned;
            with 1-2 orphans they collapse and the row centers (toggled in site.ts). */}
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i} aria-hidden="true" data-friend-filler className="hidden w-32 invisible" />
        ))}
      </ul>
    </section>
  );
}
