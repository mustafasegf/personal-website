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

export function TagFilterChip({
  tag,
  pressed,
  onToggle,
}: {
  tag: string;
  pressed: boolean;
  onToggle: (tag: string) => void;
}) {
  return (
    <Badge
      variant="outline"
      className={`${tagClass} cursor-pointer transition-colors aria-pressed:bg-primary aria-pressed:text-primary-foreground`}
      render={<button type="button" aria-pressed={pressed} onClick={() => onToggle(tag)} />}
    >
      {tag}
    </Badge>
  );
}
