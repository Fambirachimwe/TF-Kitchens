import { Quote } from "lucide-react";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { SectionHeading } from "~/components/common/SectionHeading";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsSectionProps {
  testimonials: readonly Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeading title="What Our Clients Say" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-[var(--radius-card)] bg-light p-8">
                <Quote className="h-8 w-8 text-accent/40" aria-hidden />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite className="mt-6 text-sm font-semibold not-italic text-primary">
                  — {t.author}
                </cite>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
