import { Award, Clock, Ruler, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { SectionHeading } from "~/components/common/SectionHeading";
import { WHY_CHOOSE_US } from "~/data/content";

const ICONS = {
  award: Award,
  sparkles: Sparkles,
  ruler: Ruler,
  clock: Clock,
} as const;

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-light">
      <div className="container-luxury">
        <SectionHeading
          title="Why Clients Choose TF Kitchen Design"
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <AnimateOnScroll key={item.title} delay={i * 0.08}>
                <article className="h-full rounded-[var(--radius-card)] bg-white p-8 shadow-soft transition-shadow hover:shadow-luxury">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
