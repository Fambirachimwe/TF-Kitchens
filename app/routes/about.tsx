import type { Route } from "./+types/about";
import { PageBanner } from "~/components/common/PageBanner";
import { CTASection } from "~/components/common/CTASection";
import { LazyImage } from "~/components/common/LazyImage";
import { SectionHeading } from "~/components/common/SectionHeading";
import { StatsSection } from "~/components/sections/StatsSection";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { CORE_VALUES, STATS } from "~/data/content";
import { IMAGES } from "~/data/images";
import { buildMeta } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "About TF Kitchen Design | Modern Interior Specialists",
    description:
      "Learn more about TF Kitchen Design and our passion for premium interior installations, modern kitchens, and custom-built solutions.",
    path: "/about",
  });
}

export default function About() {
  return (
    <>
      <PageBanner
        title="About TF Kitchen Design"
        subtitle="Passionate about transforming spaces through modern interior design, quality craftsmanship, and functional solutions."
        image={IMAGES.aboutHero}
        breadcrumb="About Us"
      />
      <StatsSection stats={STATS} />
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll direction="left">
              <SectionHeading
                align="left"
                title="Our Story"
                description="TF Kitchen Design is passionate about transforming spaces through modern interior design, quality craftsmanship, and functional solutions. We specialize in kitchen installations, custom cupboards, bathroom vanities, tiling, plumbing, and interior finishing services tailored to residential and commercial clients."
              />
              <p className="mt-6 leading-relaxed text-muted">
                Our mission is to create elegant spaces that combine beauty, practicality, and
                long-lasting quality. Every project reflects our commitment to premium workmanship
                and client satisfaction across Randburg and surrounding areas.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <LazyImage
                src={IMAGES.aboutMain}
                alt="TF Kitchen Design craftsmanship"
                className="aspect-[4/3] w-full rounded-[var(--radius-section)] object-cover shadow-luxury"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimateOnScroll>
              <article className="rounded-[var(--radius-card)] bg-white p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Mission
                </p>
                <h3 className="font-display mt-3 text-2xl text-text">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-muted">
                  To deliver stylish, functional, and high-quality interior solutions that enhance the
                  way people live and work.
                </p>
              </article>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <article className="rounded-[var(--radius-card)] bg-white p-8 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Vision
                </p>
                <h3 className="font-display mt-3 text-2xl text-text">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-muted">
                  To become a trusted leader in modern kitchen and interior installation solutions
                  through innovation, craftsmanship, and customer satisfaction.
                </p>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading title="Our Core Values" className="mb-12" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.08}>
                <article className="h-full rounded-[var(--radius-card)] border border-border p-8 text-center">
                  <h3 className="font-display text-xl text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted">{value.description}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary text-white">
        <div className="container-luxury text-center">
          <SectionHeading
            light
            title="Experience You Can Trust"
            description="With years of expertise in kitchen design, cabinetry, tiling, and complete interior installations, we bring professionalism and precision to every project — from concept to final handover."
            className="mb-8"
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
