import { useState } from "react";
import { ProjectCard } from "~/components/cards/ProjectCard";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import type { Project, ProjectCategory } from "~/data/content";
import { PROJECT_CATEGORIES } from "~/data/content";
import { cn } from "~/utils/cn";
import { ProjectLightbox } from "./ProjectLightbox";

interface GalleryGridProps {
  projects: Project[];
  showFilters?: boolean;
  limit?: number;
}

export function GalleryGrid({
  projects,
  showFilters = true,
  limit,
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      {showFilters && (
        <AnimateOnScroll className="mb-10 flex flex-wrap justify-center gap-3">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-light text-muted hover:bg-primary/10 hover:text-primary",
              )}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </AnimateOnScroll>
      )}

      {displayed.length === 0 ? (
        <p className="py-16 text-center text-muted">No projects in this category yet.</p>
      ) : (
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {displayed.map((project, i) => (
            <div key={project.id} className="mb-5 break-inside-avoid">
              <AnimateOnScroll delay={i * 0.05}>
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  image={project.image}
                  onClick={() => setSelectedProject(project)}
                />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      )}

      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
