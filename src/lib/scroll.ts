export function fastScrollTo(getTo: () => number, duration = 350) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scrollTo(0, getTo());
    return;
  }

  const from = scrollY;
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    scrollTo(0, from + (getTo() - from) * eased);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
