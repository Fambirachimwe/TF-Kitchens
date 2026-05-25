import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { AnimateOnScroll } from "~/components/common/AnimateOnScroll";
import { LazyImage } from "~/components/common/LazyImage";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
}

export function ServiceCard({ title, description, image, index = 0 }: ServiceCardProps) {
  return (
    <AnimateOnScroll delay={index * 0.08}>
      <Link
        to="/services"
        className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-luxury"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <LazyImage
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl text-text md:text-2xl">{title}</h3>
            <span className="rounded-full bg-light p-2 text-primary transition-colors group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
            {description}
          </p>
        </div>
      </Link>
    </AnimateOnScroll>
  );
}
