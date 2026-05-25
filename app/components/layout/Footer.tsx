import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "~/components/brand/Logo";
import { CONTACT, NAV_LINKS, SITE } from "~/constants/site";
import { SERVICES } from "~/data/content";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-luxury section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" withBackground />
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Modern kitchen and interior solutions crafted with precision, quality, and style.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={CONTACT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-accent"
                aria-label="Facebook"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-accent"
                aria-label="Instagram"
              >
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span>{CONTACT.address}</span>
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone} className="flex gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted for luxury interiors in South Africa</p>
        </div>
      </div>
    </footer>
  );
}
