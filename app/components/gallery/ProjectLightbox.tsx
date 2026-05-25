import { AnimatePresence, motion } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { LazyImage } from "~/components/common/LazyImage";
import type { Project } from "~/data/content";

interface ProjectLightboxProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[var(--radius-section)] bg-white"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-primary shadow-soft"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
            <LazyImage
              src={project.image}
              alt={project.title}
              className="max-h-[50vh] w-full object-cover md:max-h-[55vh]"
            />
            <div className="p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h2 id="lightbox-title" className="font-display mt-2 text-2xl text-text md:text-3xl">
                {project.title}
              </h2>
              {project.location && (
                <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4" aria-hidden />
                  {project.location}
                </p>
              )}
              <p className="mt-4 text-muted">{project.description}</p>
              <div className="mt-6">
                <Button to="/contact" variant="primary">
                  Request Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
