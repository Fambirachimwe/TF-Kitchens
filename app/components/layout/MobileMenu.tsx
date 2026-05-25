import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "~/components/brand/Logo";
import { Button } from "~/components/ui/Button";
import { NAV_LINKS } from "~/constants/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-primary lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex h-full flex-col px-6 py-8">
            <div className="flex items-center justify-between">
              <Logo variant="mobile" withBackground />
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-white"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="mt-10 flex flex-1 flex-col gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="font-display text-3xl text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Button to="/contact" variant="primary" size="lg" className="w-full">
              Request a Quote
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
