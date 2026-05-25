import type { Route } from "./+types/services";
import { Check } from "lucide-react";
import { PageBanner } from "~/components/common/PageBanner";
import { CTASection } from "~/components/common/CTASection";
import { LazyImage } from "~/components/common/LazyImage";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { Button } from "~/components/ui/Button";
import { SERVICE_DETAILS } from "~/data/content";
import { IMAGES } from "~/data/images";
import { cn } from "~/utils/cn";
import { buildMeta } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Interior Installation Services | TF Kitchen Design",
    description:
      "Explore our kitchen installation, cupboard, tiling, plumbing, and bathroom vanity services designed for modern residential and commercial spaces.",
    path: "/services",
  });
}

export default function Services() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="We provide complete interior installation and finishing solutions designed to transform your residential or commercial space."
        image={IMAGES.servicesHero}
        breadcrumb="Services"
      />
      <div className="section-padding">
        <div className="container-luxury space-y-24 md:space-y-32">
          {SERVICE_DETAILS.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  isReversed && "lg:[&>*:first-child]:order-2",
                )}
              >
                <AnimateOnScroll direction={isReversed ? "right" : "left"}>
                  <LazyImage
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full rounded-[var(--radius-section)] object-cover shadow-luxury"
                  />
                </AnimateOnScroll>
                <AnimateOnScroll direction={isReversed ? "left" : "right"}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-3 text-3xl text-text md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">{service.longDescription}</p>
                  <ul className="mt-6 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm text-text">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="primary" className="mt-8">
                    Request a Quote
                  </Button>
                </AnimateOnScroll>
              </div>
            );
          })}
        </div>
      </div>
      <CTASection
        title="Create Your Dream Interior Space Today"
        description="Get a tailored quotation for your kitchen, cupboards, bathroom, or complete interior project."
      />
    </>
  );
}
