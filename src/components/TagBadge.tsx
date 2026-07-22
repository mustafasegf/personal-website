import { Badge } from "@/components/ui/badge";

export function TagBadge({ tag }: { tag: string }) {
  return (
    <Badge variant="outline" size="tag">
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
      <Badge variant="outline" size="tag" behavior="filter">
        {tag}
      </Badge>
    </button>
  );
}
