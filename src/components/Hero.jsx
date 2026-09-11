import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 lg:pt-40">
      <div className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-blush/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gold-soft/30 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-32"
      >
        <div className="relative z-10">
          <motion.span
            variants={rise}
            className="inline-flex items-center gap-2 rounded-full border border-rose/20 bg-white/60 px-4 py-1.5 text-xs font-semibold text-rose"
          >
            <Sparkles size={13} /> New season, clean formulas
          </motion.span>

          <motion.h1
            variants={rise}
            className="mt-7 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Skin that glows
            <br />
            <span className="font-serif-italic text-rose">
              on its own terms.
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70"
          >
            Veloura blends dermatologist-backed actives with ingredients you can
            actually pronounce. No filler, no fuss — just routines that earn a
            place on your shelf.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#bestsellers"
              className="rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-rose/20 transition-transform hover:scale-[1.03]"
            >
              Shop bestsellers
            </a>
            <a
              href="#promos"
              className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
            >
              View this week's offer
            </a>
          </motion.div>

          <motion.dl
            variants={rise}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6"
          >
            {[
              ["12k+", "5-star reviews"],
              ["98%", "would repurchase"],
              ["0", "animal testing"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-serif text-2xl text-rose-dark">{value}</dt>
                <dd className="mt-1 text-xs text-ink/60">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          variants={rise}
          className="relative mx-auto h-105 w-full max-w-md lg:h-130"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-blush via-blush-soft to-cream-2" />

          <div className="absolute left-8 top-10 -rotate-6 overflow-hidden rounded-3xl bg-white/70 p-3 shadow-xl shadow-rose/10 backdrop-blur">
            <img
              src="/images/body-oil.jpg"
              alt=""
              className="h-40 w-28 rounded-2xl object-cover"
            />
          </div>
          <div className="absolute right-6 top-24 rotate-[5deg] overflow-hidden rounded-3xl bg-white/70 p-3 shadow-xl shadow-rose/10 backdrop-blur">
            <img
              src="/images/gel-cream.jpg"
              alt=""
              className="h-32 w-32 rounded-2xl object-cover"
            />
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rotate-2 overflow-hidden rounded-3xl bg-white/80 p-3 shadow-xl shadow-rose/10 backdrop-blur">
            <img
              src="/images/serum.jpg"
              alt=""
              className="h-36 w-24 rounded-2xl object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -right-2 flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-cream shadow-xl">
            <Leaf size={16} className="text-blush" />
            <div className="leading-tight">
              <p className="text-xs font-semibold">Clean ingredients</p>
              <p className="text-[10px] text-cream/60">Toxin-free, always</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
