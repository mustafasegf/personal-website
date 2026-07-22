import { cva } from "class-variance-authority";

export const brutalButton = cva(
  "btn-brutal inline-flex cursor-pointer items-center justify-center gap-2 text-sm font-medium",
  {
    variants: {
      tone: {
        solid: "bg-primary text-primary-foreground",
        outline: "bg-background text-foreground",
        canvas: "border-canvas-action-border! bg-canvas-action text-canvas-action-foreground",
        canvasOutline: "border-canvas-action-border! bg-canvas-action-outline text-canvas-action-outline-foreground",
      },
      size: {
        md: "h-12 px-6",
        icon: "size-10",
        "icon-lg": "size-11",
      },
      shape: {
        square: "",
        pill: "rounded-full!",
      },
    },
    defaultVariants: {
      tone: "solid",
      size: "md",
      shape: "square",
    },
  },
);
