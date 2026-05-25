import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { SectionHeading } from "~/components/common/SectionHeading";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: readonly ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          label="How We Work"
          title="A Simple & Transparent Process"
          className="mb-14"
        />
        <div className="relative">
          <div className="absolute top-8 right-0 left-0 hidden h-0.5 bg-border md:block" aria-hidden />
          <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-7">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 0.06} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary font-display text-xl text-white shadow-soft">
                  {step.step}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-text">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
