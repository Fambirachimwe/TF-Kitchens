import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { MainLayout } from "~/components/layout/MainLayout";
import { Logo } from "~/components/brand/Logo";
import { LOGO_PUBLIC_PATH } from "~/constants/brand";
import { SITE } from "~/constants/site";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
  },
  { rel: "icon", href: LOGO_PUBLIC_PATH, type: "image/png" },
  { rel: "apple-touch-icon", href: LOGO_PUBLIC_PATH },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#262262" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Something went wrong";
  let details = "An unexpected error occurred. Please try again later.";
  let is404 = false;

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404;
    message = is404 ? "Page Not Found" : "Error";
    details = is404
      ? "The requested page could not be found."
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
  }

  return (
    <MainLayout>
      <section className="flex min-h-[70vh] items-center justify-center section-padding">
        <div className="container-luxury text-center">
          <Logo variant="hero" linkToHome className="mx-auto" withBackground />
          <p className="font-display mt-8 text-6xl text-primary/30">{is404 ? "404" : "Error"}</p>
          <h1 className="font-display mt-4 text-3xl text-text">{message}</h1>
          <p className="mt-4 text-muted">{details}</p>
          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white"
          >
            Back to {SITE.name}
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
