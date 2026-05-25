import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: readonly Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="border-y border-border bg-beige py-12">
      <div className="container-luxury">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl text-primary md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-muted">{stat.label}</p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
