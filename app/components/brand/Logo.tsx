import { Link } from "react-router";
import logoSrc from "~/data/logo.png";
import { cn } from "~/utils/cn";

type LogoVariant = "navbar" | "footer" | "hero" | "compact" | "mobile";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  linkToHome?: boolean;
  /** White backing — improves contrast on light or colored backgrounds */
  withBackground?: boolean;
}

const sizeClasses: Record<LogoVariant, string> = {
  navbar: "h-10 w-auto md:h-11",
  footer: "h-14 w-auto sm:h-16",
  hero: "h-14 w-auto sm:h-16 md:h-20",
  compact: "h-8 w-auto",
  mobile: "h-12 w-auto",
};

export function Logo({
  variant = "navbar",
  className,
  linkToHome = true,
  withBackground = false,
}: LogoProps) {
  const image = (
    <img
      src={logoSrc}
      alt="TF Kitchen Design — Design, Supply, Installation"
      width={200}
      height={80}
      className={cn(sizeClasses[variant], "object-contain object-left", className)}
    />
  );

  const content = withBackground ? (
    <span className="inline-flex rounded-xl bg-white px-2.5 py-1.5 shadow-soft">
      {image}
    </span>
  ) : (
    image
  );

  if (!linkToHome) {
    return content;
  }

  return (
    <Link
      to="/"
      className="inline-flex shrink-0 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label="TF Kitchen Design — Home"
    >
      {content}
    </Link>
  );
}
