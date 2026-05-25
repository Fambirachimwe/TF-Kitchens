import type { Route } from "./+types/projects";
import { PageBanner } from "~/components/common/PageBanner";
import { CTASection } from "~/components/common/CTASection";
import { GalleryGrid } from "~/components/gallery/GalleryGrid";
import { PROJECTS } from "~/data/content";
import { IMAGES } from "~/data/images";
import { buildMeta } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Our Interior Design Projects | TF Kitchen Design",
    description:
      "View completed kitchen, cupboard, tiling, and luxury interior projects by TF Kitchen Design.",
    path: "/projects",
  });
}

export default function Projects() {
  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="Explore our portfolio of completed kitchen, cupboard, vanity, tiling, and interior installation projects."
        image={IMAGES.projectsHero}
        breadcrumb="Projects"
      />
      <section className="section-padding">
        <div className="container-luxury">
          <GalleryGrid projects={PROJECTS} showFilters />
        </div>
      </section>
      <CTASection />
    </>
  );
}
