import { ChevronDown } from "lucide-react";
import { Logo } from "~/components/brand/Logo";
import { Button } from "~/components/ui/Button";
import { LazyImage } from "./LazyImage";

interface HeroSectionProps {
  title: string;
  description: string;
  image: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

export function HeroSection({
  title,
  description,
  image,
  primaryCta = { label: "Request a Quote", to: "/contact" },
  secondaryCta = { label: "View Our Projects", to: "/projects" },
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <LazyImage
        src={image}
        alt="Luxury modern kitchen interior by TF Kitchen Design"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="overlay-dark absolute inset-0" aria-hidden />
      <div className="container-luxury relative z-10 flex min-h-screen flex-col items-center justify-center py-32 text-center text-white">
        <Logo variant="hero" linkToHome={false} className="mx-auto mb-6" />
        <h1 className="font-display max-w-4xl text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to={primaryCta.to} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          <Button to={secondaryCta.to} variant="white" size="lg">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
      <a
        href="#about-preview"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
