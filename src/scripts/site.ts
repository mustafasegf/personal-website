import { fastScrollTo } from "@/lib/scroll";

const one = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector);
const all = <T extends HTMLElement>(selector: string) => [...document.querySelectorAll<T>(selector)];

function theme() {
  for (const btn of all("[data-theme-toggle]")) {
    btn.addEventListener("click", () => {
      const dark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", dark ? "dark" : "light");
    });
  }
}

function menu() {
  const toggle = one("[data-menu-toggle]");
  const panel = one("[data-menu]");
  if (!toggle || !panel) return;

  const setOpen = (open: boolean) => {
    panel.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  toggle.addEventListener("click", () => setOpen(panel.classList.contains("hidden")));
  panel.addEventListener("click", (e) => {
    if ((e.target as Element).closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !isOpen()) return;
    setOpen(false);
    toggle.focus();
  });
  document.addEventListener("pointerdown", (e) => {
    const target = e.target as Node;
    if (isOpen() && !panel.contains(target) && !toggle.contains(target)) setOpen(false);
  });
}

function anchors() {
  document.addEventListener("click", (e) => {
    const anchor = (e.target as Element).closest?.('a[href^="#"]');
    const target = anchor && document.querySelector(anchor.getAttribute("href")!);
    if (!target) return;

    e.preventDefault();
    history.pushState(null, "", anchor.getAttribute("href"));

    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    // recompute the target each frame: lazy-loaded images shift the layout mid-scroll
    fastScrollTo(() => target.getBoundingClientRect().top + scrollY - margin);
  });
}

function shade() {
  const overlay = one("[data-shade]");
  const label = one("[data-shade-label]");
  one("[data-shade-toggle]")?.addEventListener("click", () => {
    const off = overlay!.classList.toggle("opacity-0");
    label!.textContent = off ? "Add Shade" : "Remove Shade";
  });
}

function filter() {
  const grid = one("[data-project-grid]");
  if (!grid) return;

  const cards = all("[data-tags]");
  const chips = all<HTMLButtonElement>("[data-tag]");
  const helper = one("[data-filter-helper]")!;
  const status = one("[data-filter-status]")!;
  const count = one("[data-filter-count]")!;
  const selected = new Set<string>();

  const apply = () => {
    let shown = 0;
    for (const card of cards) {
      const visible = [...selected].every((t) => card.dataset.tags!.split("|").includes(t));
      card.classList.toggle("hidden", !visible);
      if (visible) shown++;
    }
    for (const chip of chips) {
      chip.setAttribute("aria-pressed", String(selected.has(chip.dataset.tag!)));
    }
    const hasSelection = selected.size > 0;
    helper.classList.toggle("hidden", hasSelection);
    status.classList.toggle("hidden", !hasSelection);
    status.classList.toggle("flex", hasSelection);
    count.textContent = `Showing ${shown} of ${cards.length} projects for: ${[...selected].join(", ")}`;
  };

  for (const chip of chips) {
    chip.addEventListener("click", () => {
      const tag = chip.dataset.tag!;
      selected.has(tag) ? selected.delete(tag) : selected.add(tag);
      apply();
    });
  }
  one("[data-filter-clear]")?.addEventListener("click", () => {
    selected.clear();
    apply();
  });
}

function friendsGrid() {
  const list = one("[data-friends]");
  if (!list) return;
  const fillers = all("[data-friend-filler]");

  const apply = () => {
    for (const f of fillers) f.classList.add("hidden");
    const tops = all("[data-friend]").map((el) => el.offsetTop);
    const first = tops[0];
    const last = tops[tops.length - 1];
    if (first === last) return; // single row needs no fixing
    const cols = tops.filter((t) => t === first).length;
    const orphans = tops.filter((t) => t === last).length;
    // 1-2 orphans center, except narrow (2-3 column) layouts which always stay aligned
    if (orphans > 2 || cols <= 3) for (const f of fillers.slice(0, cols - orphans)) f.classList.remove("hidden");
  };

  apply();
  new ResizeObserver(apply).observe(list);
}

function copyEmail() {
  const btn = one("[data-copy-email]");
  const label = one("[data-copy-label]");
  if (!btn || !label) return;

  const email = one<HTMLAnchorElement>('a[href^="mailto:"]')!.href.slice("mailto:".length);
  let timer: ReturnType<typeof setTimeout>;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = "Copied!";
    } catch {
      label.textContent = email;
    }
    clearTimeout(timer);
    timer = setTimeout(() => (label.textContent = "Copy address"), 2000);
  });
}

function scrollTop() {
  const btn = one("[data-scroll-top]");
  if (!btn) return;

  const onScroll = () => btn.classList.toggle("hidden", scrollY <= 400);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => fastScrollTo(() => 0));
}

theme();
menu();
anchors();
shade();
filter();
friendsGrid();
copyEmail();
scrollTop();
