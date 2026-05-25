import { Link } from "react-router";
import { cn } from "~/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  type = "button",
  onClick,
  disabled,
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-accent text-white shadow-soft hover:bg-accent-hover hover:scale-[1.02] focus-visible:outline-accent",
    secondary:
      "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:outline-primary",
    ghost: "bg-transparent text-primary hover:bg-light",
    white:
      "border-2 border-white bg-white text-primary hover:bg-transparent hover:text-white focus-visible:outline-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
