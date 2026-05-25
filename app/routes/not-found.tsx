import type { Route } from "./+types/not-found";
import { Home } from "lucide-react";
import { Logo } from "~/components/brand/Logo";
import { Button } from "~/components/ui/Button";
import { buildMeta } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Page Not Found | TF Kitchen Design",
    description: "The page you are looking for could not be found.",
  });
}

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-light section-padding">
      <div className="container-luxury text-center">
        <Logo variant="hero" linkToHome className="mx-auto" withBackground />
        <p className="font-display mt-8 text-8xl text-primary/20 md:text-9xl">404</p>
        <h1 className="font-display mt-4 text-3xl text-text md:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you
          back to exploring our luxury interior solutions.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/" variant="primary" size="lg">
            <Home className="h-5 w-5" />
            Back to Home
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
