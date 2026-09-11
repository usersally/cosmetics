import { ArrowRight, Sparkles } from "lucide-react";

export default function Promos() {
  return (
    <section id="promos" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="grid overflow-hidden rounded-[2.5rem] bg-rose lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-14 text-cream sm:px-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cream/15 px-3.5 py-1 text-xs font-semibold">
            <Sparkles size={13} /> Limited time
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            30% off your
            <br />
            first routine
          </h2>
          <p className="mt-4 max-w-sm text-sm text-cream/75">
            Build a three-step routine from our bestsellers and we'll take 30%
            off the whole set — automatically, at checkout.
          </p>

          <a
            href="#bestsellers"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-cream px-7 py-3 text-sm font-semibold text-rose-dark transition-transform hover:scale-[1.03]"
          >
            Build my routine <ArrowRight size={15} />
          </a>
        </div>

        <div className="relative flex items-center justify-center gap-4 bg-rose-dark/40 px-8 py-14">
          <img
            src="/images/gel-cream.jpg"
            alt=""
            className="h-40 w-40 -rotate-6 rounded-2xl object-cover shadow-xl"
          />
          <img
            src="/images/serum.jpg"
            alt=""
            className="h-44 w-28 rotate-3 rounded-2xl object-cover shadow-xl"
          />
          <img
            src="/images/lipstick.jpg"
            alt=""
            className="hidden h-40 w-24 -rotate-3 rounded-2xl object-cover shadow-xl sm:block"
          />
        </div>
      </div>
    </section>
  );
}
