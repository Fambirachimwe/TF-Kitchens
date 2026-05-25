import type { Route } from "./+types/contact";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageBanner } from "~/components/common/PageBanner";
import { ContactForm } from "~/components/forms/ContactForm";
import { Button } from "~/components/ui/Button";
import { CONTACT, getWhatsAppUrl } from "~/constants/site";
import { IMAGES } from "~/data/images";
import { buildMeta } from "~/utils/seo";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Contact TF Kitchen Design | Request a Quote",
    description:
      "Contact TF Kitchen Design for modern kitchen installations, cupboards, tiling, plumbing, and luxury interior solutions.",
    path: "/contact",
  });
}

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact TF Kitchen Design"
        subtitle="Have a project in mind? Contact us today to request a quotation or discuss your interior design and installation requirements."
        image={IMAGES.contactHero}
        breadcrumb="Contact"
      />
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-text md:text-3xl">Get In Touch</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Tell us about your project requirements and our team will get back to you with a
                tailored quotation.
              </p>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-text">Address</p>
                    <p className="mt-1 text-sm text-muted">{CONTACT.address}</p>
                  </div>
                </li>
                {CONTACT.phones.map((phone) => (
                  <li key={phone} className="flex gap-4">
                    <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-text">Phone</p>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-sm text-muted hover:text-accent"
                      >
                        {phone}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex gap-4">
                  <MessageCircle className="h-5 w-5 shrink-0 text-[#25D366]" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-text">WhatsApp</p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-muted hover:text-accent"
                    >
                      {CONTACT.whatsappDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-text">Email</p>
                    <a
                      href="mailto:info@tfkitchendesign.co.za"
                      className="mt-1 block text-sm text-muted hover:text-accent"
                    >
                      info@tfkitchendesign.co.za
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-text">Hours</p>
                    <p className="mt-1 text-sm text-muted">Mon – Fri: 8:00 – 17:00</p>
                    <p className="text-sm text-muted">Sat: By appointment</p>
                  </div>
                </li>
              </ul>
              <Button
                href={getWhatsAppUrl()}
                external
                variant="primary"
                className="mt-8 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-[var(--radius-section)] border border-border bg-white p-6 shadow-soft md:p-10">
                <h2 className="font-display text-2xl text-text">Request a Quote</h2>
                <p className="mt-2 text-sm text-muted">
                  Fill in the form below and we&apos;ll respond as soon as possible.
                </p>
                <ContactForm className="mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="font-display mb-6 text-2xl text-text">Find Us</h2>
          <div className="overflow-hidden rounded-[var(--radius-section)] shadow-soft">
            <iframe
              title="TF Kitchen Design location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.0!2d27.9!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUmFuZGJ1cmch!5e0!3m2!1sen!2sza!4v1"
              width="100%"
              height="400"
              className="w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
