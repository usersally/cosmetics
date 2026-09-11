import { Plus, Star } from "lucide-react";
import { bestSellers } from "../data/products";

export default function BestSellers() {
  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-ink">Loved on repeat</h2>
          <p className="mt-2 max-w-md text-sm text-ink/60">
            The eight products our customers reorder before they even run out.
          </p>
        </div>

        <a
          href="#"
          className="text-sm font-semibold text-rose underline underline-offset-4"
        >
          View all products
        </a>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {bestSellers.map((product) => (
          <article
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/70 p-5 ring-1 ring-ink/5 transition-shadow hover:shadow-xl hover:shadow-rose/10"
          >
            <div className="relative flex h-50 items-center justify-center overflow-hidden rounded-2xl bg-cream-2">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <button
                aria-label={`Quick add ${product.name}`}
                className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-rose text-cream opacity-0 shadow-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="mt-4 flex-1">
              <h3 className="text-sm font-semibold text-ink">{product.name}</h3>
              <p className="mt-0.5 text-xs text-ink/50">{product.note}</p>
            </div>

            <div className="mt-3 flex items-center gap-1 text-gold">
              <Star size={13} fill="currentColor" strokeWidth={0} />
              <span className="text-xs font-medium text-ink/70">
                {product.rating} · {product.reviews}
              </span>
            </div>

            <p className="mt-2 font-serif text-lg text-rose-dark">
              ${product.price}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
