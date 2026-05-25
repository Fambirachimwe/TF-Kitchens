import { Award, CheckCircle2 } from "lucide-react";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { LazyImage } from "~/components/common/LazyImage";
import { Button } from "~/components/ui/Button";
import { IMAGES } from "~/data/images";

export function AboutPreview() {
  return (
    <section id="about-preview" className="section-padding">
      <div className="container-luxury">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll direction="left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About Us
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-text md:text-4xl lg:text-5xl">
              Crafting Beautiful Spaces With Modern Design Excellence
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              TF Kitchen Design specializes in creating elegant and functional interiors tailored to
              each client&apos;s needs. From luxurious kitchens and custom-built cupboards to bathroom
              vanities, tiling, and plumbing, we bring craftsmanship, precision, and creativity into
              every project.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Our team focuses on quality workmanship, premium finishes, and exceptional attention to
              detail to ensure every space feels modern, practical, and timeless.
            </p>
            <ul className="mt-8 space-y-3">
              {["Premium finishes", "Custom designs", "Residential & commercial"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-text">
                  <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" className="mt-8">
              Learn More
            </Button>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" className="relative">
            <div className="grid grid-cols-2 gap-4">
              <LazyImage
                src={IMAGES.aboutMain}
                alt="Modern luxury kitchen interior"
                className="col-span-2 aspect-[4/3] rounded-[var(--radius-image)] object-cover shadow-luxury"
              />
              <LazyImage
                src={IMAGES.aboutSecondary}
                alt="Elegant living space interior"
                className="aspect-square rounded-[var(--radius-image)] object-cover"
              />
              <div className="flex aspect-square flex-col items-center justify-center rounded-[var(--radius-image)] bg-primary p-6 text-center text-white">
                <Award className="h-10 w-10 text-accent" aria-hidden />
                <p className="font-display mt-3 text-3xl">10+</p>
                <p className="mt-1 text-sm text-white/80">Years of Excellence</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
