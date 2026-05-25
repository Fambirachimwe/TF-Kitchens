import { AnimateOnScroll } from "./AnimateOnScroll";
import { cn } from "~/utils/cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-white/80" : "text-accent",
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-text",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/85" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
