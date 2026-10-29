import Navbar from "../components/Navbar";
import { perfumes } from "../perfumes/pefs";

const naira = (n) => `₦${n.toLocaleString()}`;

// Split the perfumes by price: lowest third, middle third, highest third
const sorted = [...perfumes].sort((a, b) => a.price - b.price);
const size = Math.ceil(sorted.length / 3);

const collections = [
  {
    id: "everyday",
    title: "Everyday Collection",
    text: "Fresh fragrances for your everyday moments.",
    items: sorted.slice(0, size),
  },
  {
    id: "luxury",
    title: "Luxury Collection",
    text: "Sophisticated scents for special occasions.",
    items: sorted.slice(size * 2),
  },
  {
    id: "signature",
    title: "Signature Collection",
    text: "Distinctive fragrances designed to leave an impression.",
    items: sorted.slice(size, size * 2),
  },
];

export default function Collections() {
  return (
    <div className="min-h-screen bg-[#ECE8EE] text-[#1C1620]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[26rem] w-full overflow-hidden bg-[#1C1620]">
        <img
          src="/pef4.jpeg"
          alt="Perfume collection"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1620] via-[#1C1620]/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-6xl">
            Our Collections
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Discover fragrances curated for every mood and occasion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {collections.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="rounded-full border border-white/40 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-[#1C1620]"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      {collections.map((c, index) => (
        <section
          key={c.id}
          id={c.id}
          className={index % 2 === 1 ? "bg-[#1C1620] text-white" : ""}
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-serif text-3xl md:text-4xl">{c.title}</h2>
            <div className="mt-2 h-1 w-16 rounded-full bg-[#C58B3A]" />
            <p
              className={`mt-6 max-w-xl ${
                index % 2 === 1 ? "text-white/70" : "text-[#1C1620]/70"
              }`}
            >
              {c.text}
            </p>

            {c.items.length === 0 && (
              <p className="mt-10">No fragrances in this collection yet.</p>
            )}

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.items.map((perfume) => (
                <article key={perfume.id} className="group">
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <img
                      src={perfume.image}
                      alt={perfume.name}
                      className="aspect-[4/5] w-full object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl">{perfume.name}</h3>
                    <p
                      className={`shrink-0 font-medium ${
                        index % 2 === 1 ? "text-[#E0AC62]" : "text-[#8A5A14]"
                      }`}
                    >
                      {naira(perfume.price)}
                    </p>
                  </div>
                  <p
                    className={`mt-1 line-clamp-2 text-sm ${
                      index % 2 === 1 ? "text-white/70" : "text-[#1C1620]/70"
                    }`}
                  >
                    {perfume.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}