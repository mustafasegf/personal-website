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
    <Badge
      variant="outline"
      className={`${tagClass} cursor-pointer transition-[background-color,translate,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-muted hover:shadow-brutal-sm aria-pressed:bg-chip-selected aria-pressed:text-chip-selected-foreground aria-pressed:hover:bg-chip-selected/85`}
      render={<button type="button" data-tag={tag} aria-pressed={false} />}
    >
      {tag}
    </Badge>
  );
}
