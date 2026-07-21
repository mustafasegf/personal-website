import { useEffect, useState } from "react";
import { brutalButton } from "@/components/brutal";
import { ArrowUpIcon } from "@/components/icons";
import { fastScrollTo } from "@/lib/scroll";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => fastScrollTo(() => 0)}
      className={brutalButton({ tone: "outline", size: "icon-lg", className: "fixed right-6 bottom-6 z-40" })}
    >
      <ArrowUpIcon />
    </button>
  );
}
