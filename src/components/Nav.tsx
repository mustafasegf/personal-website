import { MenuIcon, MoonIcon, SunIcon } from "@/components/icons";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#sites", label: "Sites" },
  { href: "#friends", label: "Friends" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 isolate border-b-2 bg-background">
      <nav className="flex items-stretch">
        <a href="#top" className="flex items-center border-r-2 px-4 py-4 text-sm font-bold tracking-wide uppercase sm:px-6">
          Mustafa
        </a>

        <ul className="hidden items-stretch md:flex">
          {links.map(({ href, label }) => (
            <li key={href} className="flex">
              <a href={href} className="flex items-center px-6 text-sm hover:underline hover:underline-offset-4">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-stretch">
          <button
            type="button"
            data-theme-toggle
            aria-label="Toggle dark mode"
            className="flex cursor-pointer items-center border-l-2 px-4 hover:bg-muted"
          >
            <SunIcon className="hidden size-6 dark:block" />
            <MoonIcon className="size-6 dark:hidden" />
          </button>

          <a
            href="#contact"
            className="hidden items-center border-l-2 bg-canvas-action px-6 text-sm font-medium text-canvas-action-foreground hover:bg-canvas-action/85 md:flex"
          >
            Contact Me
          </a>

          <button
            type="button"
            data-menu-toggle
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            className="flex cursor-pointer items-center border-l-2 px-4 hover:bg-muted md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        data-menu
        className="absolute inset-x-0 top-full hidden border-t-2 border-t-border bg-background md:hidden"
      >
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="block border-b px-4 py-4 text-sm hover:bg-muted font-medium">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="block bg-canvas-action px-4 py-4 text-sm font-medium text-canvas-action-foreground">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
