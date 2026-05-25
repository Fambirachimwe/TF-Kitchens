import { motion } from "framer-motion";
import { LazyImage } from "~/components/common/LazyImage";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  onClick: () => void;
}

export function ProjectCard({ title, category, image, onClick }: ProjectCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-[var(--radius-image)] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
        <LazyImage
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 opacity-90 transition-opacity group-hover:opacity-100">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
          {category}
        </span>
        <h3 className="font-display mt-1 text-lg text-white md:text-xl">{title}</h3>
      </div>
    </motion.button>
  );
}
