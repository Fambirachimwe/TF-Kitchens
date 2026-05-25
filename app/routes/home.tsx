import type { Route } from "./+types/home";
import { HeroSection } from "~/components/common/HeroSection";
import { CTASection } from "~/components/common/CTASection";
import { SectionHeading } from "~/components/common/SectionHeading";
import { ServiceCard } from "~/components/cards/ServiceCard";
import { GalleryGrid } from "~/components/gallery/GalleryGrid";
import { FAQAccordion } from "~/components/sections/FAQAccordion";
import { ProcessTimeline } from "~/components/sections/ProcessTimeline";
import { TestimonialsSection } from "~/components/sections/TestimonialsSection";
import { Button } from "~/components/ui/Button";
import {
  FAQ_ITEMS,
  PROCESS_STEPS,
  PROJECTS,
  SERVICES,
  TESTIMONIALS,
} from "~/data/content";
import { IMAGES } from "~/data/images";
import { AboutPreview } from "~/sections/home/AboutPreview";
import { TrustStrip } from "~/sections/home/TrustStrip";
import { WhyChooseUs } from "~/sections/home/WhyChooseUs";
import { buildMeta } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "TF Kitchen Design | Luxury Kitchen & Interior Solutions",
    description:
      "TF Kitchen Design specializes in modern kitchen installations, built-in cupboards, bathroom vanities, tiling, plumbing, and luxury interior solutions in Randburg and surrounding areas.",
    path: "/",
  });
}

export default function Home() {
  return (
    <>
      <HeroSection
        title="Luxury Kitchens & Interior Spaces Crafted With Precision"
        description="At TF Kitchen Design, we transform ordinary spaces into elegant modern interiors through custom kitchen installations, built-in cupboards, bathroom vanities, tiling, plumbing, and premium finishing solutions."
        image={IMAGES.hero}
      />
      <TrustStrip />
      <AboutPreview />
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            label="Our Services"
            title="Interior Solutions Designed Around Your Lifestyle"
            description="We provide complete interior installation and finishing solutions for residential and commercial spaces."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <ProcessTimeline steps={PROCESS_STEPS} />
      <section className="section-padding bg-light">
        <div className="container-luxury">
          <SectionHeading
            title="Explore Our Recent Projects"
            description="Browse some of our completed interior and kitchen installations showcasing craftsmanship, modern styling, and premium finishes."
            className="mb-12"
          />
          <GalleryGrid projects={PROJECTS} showFilters={false} limit={6} />
          <div className="mt-12 text-center">
            <Button to="/projects" variant="primary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      <TestimonialsSection testimonials={TESTIMONIALS} />
      <FAQAccordion items={FAQ_ITEMS} />
      <CTASection image={IMAGES.ctaBanner} />
    </>
  );
}
