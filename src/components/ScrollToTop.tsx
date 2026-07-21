import { brutalButton } from "@/components/brutal";
import { ArrowUpIcon } from "@/components/icons";

export function ScrollToTop() {
  return (
    <button
      type="button"
      data-scroll-top
      aria-label="Scroll to top"
      className={brutalButton({ tone: "outline", size: "icon-lg", className: "fixed right-6 bottom-6 z-40 hidden" })}
    >
      <ArrowUpIcon />
    </button>
  );
}
