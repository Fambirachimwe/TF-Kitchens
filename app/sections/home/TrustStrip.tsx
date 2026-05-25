import { Logo } from "~/components/brand/Logo";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { TRUST_ITEMS } from "~/data/content";

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-white py-8">
      <div className="container-luxury">
        <AnimateOnScroll className="flex flex-col items-center text-center">
          <Logo variant="compact" linkToHome={false} withBackground className="mb-4" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Trusted Interior & Kitchen Design Specialists
          </p>
          <p className="mt-2 text-sm text-muted">
            Delivering stylish, functional, and high-quality interior solutions for homes and businesses.
          </p>
        </AnimateOnScroll>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {TRUST_ITEMS.map((item, i) => (
            <AnimateOnScroll key={item} delay={i * 0.05}>
              <span className="rounded-full bg-light px-5 py-2 text-sm font-medium text-primary">
                {item}
              </span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
