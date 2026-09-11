import { Camera, Send, Users } from "lucide-react";

const COLUMNS = [
  {
    title: "Shop",
    links: ["Skincare", "Makeup", "Body care", "Gift sets"],
  },
  {
    title: "Customer care",
    links: [
      "Track your order",
      "Shipping & returns",
      "FAQs",
      "Terms of service",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <p className="font-serif text-2xl text-cream">Veloura</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
            Thoughtful formulas for every skin, every day. Made without
            compromise, tested without cruelty.
          </p>
          <div className="mt-6 flex gap-3">
            {[Camera, Users, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-rose"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-cream">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-cream/55 transition-colors hover:text-cream"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold text-cream">Stay in the loop</p>
          <p className="mt-4 text-sm text-cream/55">
            Skin tips and early access to new drops, once or twice a month.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex overflow-hidden rounded-full bg-cream/10"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-rose px-5 text-sm font-semibold text-cream"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 py-6 text-center text-xs text-cream/40 lg:px-10">
        © {new Date().getFullYear()} Veloura Beauty. All rights reserved.
      </div>
    </footer>
  );
}
