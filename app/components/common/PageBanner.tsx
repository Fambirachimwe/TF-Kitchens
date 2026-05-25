import { Logo } from "~/components/brand/Logo";
import { LazyImage } from "./LazyImage";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
  showLogo?: boolean;
}

export function PageBanner({
  title,
  subtitle,
  image,
  breadcrumb,
  showLogo = true,
}: PageBannerProps) {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden md:min-h-[50vh]">
      <LazyImage
        src={image}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="overlay-dark absolute inset-0" aria-hidden />
      <div className="container-luxury relative z-10 py-24 text-center text-white">
        {showLogo && (
          <Logo variant="hero" linkToHome className="mx-auto mb-6" withBackground />
        )}
        {breadcrumb && (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            Home / {breadcrumb}
          </p>
        )}
        <h1 className="font-display text-4xl tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
