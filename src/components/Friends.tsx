import { friends } from "@/data/site";

export function Friends() {
  return (
    <section id="friends" className="scroll-mt-16 bg-brand-lavender px-6 py-14 text-center sm:px-10">
      <h2 className="font-heading text-balance text-2xl font-semibold leading-section-heading tracking-section-heading sm:text-3xl">My Friends</h2>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed">
        The internet is more fun with friends. Go visit their corners of it too.
      </p>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
        {friends.map((f) => (
          <li key={f.href}>
            <a
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline decoration-2 underline-offset-4 hover:decoration-brand-salmon"
            >
              {f.name}
            </a>{" "}
            <span className="text-sm opacity-75">{new URL(f.href).host}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
