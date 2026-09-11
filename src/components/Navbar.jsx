import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const LINKS = [
  { label: "Shop", href: "#bestsellers" },
  { label: "Promos", href: "#promos" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300  ${
        scrolled ? "shadow-[0_1px_0_rgba(125,46,59,0.08)]" : ""
      }`}
    >
      <div className="bg-blush-soft/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <a
            href="#top"
            className="font-serif text-2xl tracking-wide text-rose-dark"
          >
            Veloura
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/80 transition-colors hover:text-rose"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 md:flex">
            <button
              aria-label="Search"
              className="text-ink/70 transition-colors hover:text-rose"
            >
              <Search size={19} />
            </button>

            <button
              aria-label="Account"
              className="text-ink/70 transition-colors hover:text-rose"
            >
              <User size={19} />
            </button>

            <button
              aria-label="Cart"
              className="relative text-ink/70 transition-colors hover:text-rose"
            >
              <ShoppingBag size={19} />

              <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose text-[9px] font-semibold text-cream">
                2
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-ink md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden bg-blush-soft/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-base font-medium text-ink/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
