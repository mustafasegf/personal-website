import { Badge } from "@/components/ui/badge";

const tagClass =
  "h-auto rounded-full border-2 border-border bg-background px-3 py-0.5 text-xs font-semibold text-foreground";

export function TagBadge({ tag }: { tag: string }) {
  return (
    <Badge variant="outline" className={tagClass}>
      {tag}
    </Badge>
  );
}

export function TagFilterChip({ tag }: { tag: string }) {
  return (
    <button
      type="button"
      data-tag={tag}
      aria-pressed={false}
      className="tag-filter-control touch-target inline-flex cursor-pointer items-center justify-center rounded-full"
    >
      <Badge
        variant="outline"
        className={`${tagClass} tag-filter-control__visual pointer-events-none transition-[background-color,translate,box-shadow] duration-150`}
      >
        {tag}
      </Badge>
    </button>
  );
}
