import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "~/components/ui/Button";
import { NAV_LINKS, SITE } from "~/constants/site";
import { cn } from "~/utils/cn";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isHome = location.pathname === "/";
  const showSolid = isScrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-400",
          showSolid ? "py-3" : "py-5",
        )}
      >
        <div className="container-luxury">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-3 transition-all duration-400 md:px-6",
              showSolid
                ? "bg-white/95 shadow-soft backdrop-blur-md"
                : "bg-white/10 backdrop-blur-md",
            )}
            aria-label="Main navigation"
          >
            <Link
              to="/"
              className={cn(
                "font-display text-lg font-semibold tracking-tight md:text-xl",
                showSolid ? "text-primary" : "text-white",
              )}
            >
              {SITE.name}
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      showSolid
                        ? "text-text hover:text-accent"
                        : "text-white/90 hover:text-white",
                      location.pathname === link.to && (showSolid ? "text-accent" : "text-white"),
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button to="/contact" variant="primary" size="sm">
                Request Quote
              </Button>
            </div>

            <button
              type="button"
              className={cn(
                "rounded-full p-2 lg:hidden",
                showSolid ? "text-primary" : "text-white",
              )}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
