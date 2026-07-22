import { brutalButton } from "@/components/brutal";
import { ArrowUpIcon } from "@/components/icons";

export function ScrollToTop() {
  return (
    <button
      type="button"
      data-scroll-top
      aria-label="Scroll to top"
      className={brutalButton({ tone: "canvasOutline", size: "icon-lg", placement: "scrollTop" })}
    >
      <ArrowUpIcon />
    </button>
  );
}
