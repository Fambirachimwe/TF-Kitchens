import { Button } from "~/components/ui/Button";
import { getWhatsAppUrl } from "~/constants/site";
import { LazyImage } from "./LazyImage";
import { SectionHeading } from "./SectionHeading";

interface CTASectionProps {
  title?: string;
  description?: string;
  image?: string;
}

export function CTASection({
  title = "Ready To Transform Your Space?",
  description = "Let TF Kitchen Design bring your vision to life with modern interior solutions crafted for style, comfort, and functionality.",
  image,
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="relative overflow-hidden rounded-[var(--radius-section)]">
          {image && (
            <>
              <LazyImage
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="overlay-dark absolute inset-0" aria-hidden />
            </>
          )}
          <div
            className={
              image
                ? "relative z-10 px-6 py-20 text-center md:px-16 md:py-28"
                : "rounded-[var(--radius-section)] bg-primary px-6 py-20 text-center md:px-16 md:py-28"
            }
          >
            <SectionHeading title={title} description={description} light={!!image} />
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/contact" variant={image ? "primary" : "primary"} size="lg">
                Request a Quote
              </Button>
              <Button
                href={getWhatsAppUrl()}
                external
                variant={image ? "white" : "secondary"}
                size="lg"
                className={!image ? "border-white text-white hover:bg-white hover:text-primary" : undefined}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
