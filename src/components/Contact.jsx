import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service of choice.
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-12 rounded-[2.5rem] bg-blush-soft p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
        <div>
          <h2 className="font-serif text-4xl text-ink">Ask us anything</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
            Skin questions, order help, or a wholesale enquiry — our team
            replies within one business day.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-3 text-sm text-ink/75">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose">
                <Mail size={16} />
              </span>
              hello@veloura.com
            </li>
            <li className="flex items-center gap-3 text-sm text-ink/75">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose">
                <Phone size={16} />
              </span>
              +213 555 010 220
            </li>
            <li className="flex items-center gap-3 text-sm text-ink/75">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose">
                <MapPin size={16} />
              </span>
              Chlef, Algeria
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full name"
              required
              className="rounded-2xl border-0 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:ring-2 focus:ring-rose"
            />
            <input
              type="email"
              placeholder="Email address"
              required
              className="rounded-2xl border-0 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:ring-2 focus:ring-rose"
            />
          </div>
          <textarea
            rows={5}
            placeholder="How can we help?"
            required
            className="resize-none rounded-2xl border-0 bg-white px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:ring-2 focus:ring-rose"
          />
          <button
            type="submit"
            className="mt-1 w-fit rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-rose/20 transition-transform hover:scale-[1.02]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
