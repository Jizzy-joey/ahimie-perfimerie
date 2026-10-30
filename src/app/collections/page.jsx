
import Link from "next/link";
import Navbar from "../components/Navbar";
import { perfumes } from "../data/pef";

const BASE_PATH = "/ahimie-perfimerie";

const imagePath = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  if (path.startsWith(`${BASE_PATH}/`)) return path;

  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
};

const naira = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

// Divide perfumes into three price-based collections.
const sorted = [...perfumes].sort((a, b) => a.price - b.price);
const size = Math.ceil(sorted.length / 3);

const collections = [
  {
    id: "everyday",
    number: "01",
    title: "Everyday Collection",
    subtitle: "The beauty of everyday moments",
    description:
      "Fresh, effortless fragrances to complement your daily routine. Discover scents that bring a little luxury to every moment.",
    items: sorted.slice(0, size),
    banner: `${BASE_PATH}/pef3.jpeg`,
    dark: false,
  },
  {
    id: "luxury",
    number: "02",
    title: "Luxury Collection",
    subtitle: "An expression of elegance",
    description:
      "Indulge in our most sophisticated fragrances, selected for memorable evenings, special occasions and timeless elegance.",
    items: sorted.slice(size * 2),
    banner: `${BASE_PATH}/pef12.jpeg`,
    dark: true,
  },
  {
    id: "signature",
    number: "03",
    title: "Signature Collection",
    subtitle: "Make your presence unforgettable",
    description:
      "Distinctive fragrances with personality and character. Find a scent that becomes part of your unique identity.",
    items: sorted.slice(size, size * 2),
    banner: `${BASE_PATH}/pef8.jpeg`,
    dark: false,
  },
];

export default function Collections() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#30241D]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#29211D]">
        <img
          src={`${BASE_PATH}/pef4.jpeg`}
          alt="Ahimie fragrance collections"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#211A16]/95 via-[#211A16]/65 to-[#211A16]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D5AD77]">
            AHIMIE PERFUMERY
          </p>

          <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
            The art of
            <span className="block italic text-[#D5AD77]">
              finding your scent.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/75">
            Explore fragrance collections selected for
            every personality, every mood and every occasion.
          </p>

          <a
            href="#discover"
            className="mt-10 inline-block bg-[#D5AD77] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#29211D] transition hover:bg-[#E6C598]"
          >
            Discover collections
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="discover"
        className="mx-auto max-w-7xl px-6 pb-20 pt-24 text-center md:px-12"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#A17B51]">
          Curated Fragrance Experiences
        </p>

        <h2 className="mt-5 font-serif text-4xl md:text-6xl">
          Explore our collections
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#817369]">
          Whether you're searching for a subtle everyday
          fragrance or something unforgettable, there's
          a collection waiting for you.
        </p>

        {/* Collection quick links */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {collections.map((collection) => (
            <a
              key={collection.id}
              href={`#${collection.id}`}
              className="group border border-[#E2D8CB] bg-white px-6 py-8 text-left transition hover:border-[#A17B51] hover:shadow-lg"
            >
              <p className="text-xs tracking-[0.25em] text-[#A17B51]">
                COLLECTION {collection.number}
              </p>

              <h3 className="mt-4 font-serif text-2xl">
                {collection.title}
              </h3>

              <p className="mt-3 text-sm text-[#817369]">
                {collection.subtitle}
              </p>

              <span className="mt-7 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#A17B51]">
                Explore collection →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* COLLECTION SECTIONS */}
      {collections.map((collection) => (
        <section
          key={collection.id}
          id={collection.id}
          className={`scroll-mt-28 py-20 ${
            collection.dark
              ? "bg-[#30241D] text-white"
              : "bg-[#F8F5F0] text-[#30241D]"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">

            {/* Collection editorial banner */}
            <div className="grid overflow-hidden lg:grid-cols-2">
              <div className="relative min-h-[350px] overflow-hidden lg:min-h-[470px]">
                <img
                  src={collection.banner}
                  alt={collection.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div
                className={`flex flex-col justify-center px-7 py-14 md:px-14 ${
                  collection.dark
                    ? "bg-[#45362B]"
                    : "bg-[#EAE0D4]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#B58C5B]">
                  COLLECTION {collection.number}
                </p>

                <h2 className="mt-6 max-w-lg font-serif text-4xl leading-tight md:text-5xl">
                  {collection.title}
                </h2>

                <p
                  className={`mt-5 font-serif text-xl italic ${
                    collection.dark
                      ? "text-[#D5AD77]"
                      : "text-[#A17B51]"
                  }`}
                >
                  {collection.subtitle}
                </p>

                <p
                  className={`mt-7 max-w-md leading-8 ${
                    collection.dark
                      ? "text-white/70"
                      : "text-[#75685D]"
                  }`}
                >
                  {collection.description}
                </p>

                <a
                  href={`#${collection.id}-products`}
                  className={`mt-9 w-fit border-b pb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                    collection.dark
                      ? "border-[#D5AD77] text-[#D5AD77]"
                      : "border-[#30241D] text-[#30241D]"
                  }`}
                >
                  Explore fragrances
                </a>
              </div>
            </div>

            {/* Product heading */}
            <div
              id={`${collection.id}-products`}
              className="mt-16 flex scroll-mt-28 flex-wrap items-end justify-between gap-4"
            >
              <div>
                <p
                  className={`text-xs uppercase tracking-[0.25em] ${
                    collection.dark
                      ? "text-[#D5AD77]"
                      : "text-[#A17B51]"
                  }`}
                >
                  Selected for you
                </p>

                <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                  Discover the fragrances
                </h3>
              </div>

              <p
                className={`text-sm ${
                  collection.dark
                    ? "text-white/60"
                    : "text-[#817369]"
                }`}
              >
                {collection.items.length} fragrances
              </p>
            </div>

            {/* Product grid */}
            {collection.items.length === 0 ? (
              <p className="mt-10">
                No fragrances in this collection yet.
              </p>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {collection.items.map((perfume) => (
                  <article key={perfume.id} className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE0D4]">
                      <img
                        src={imagePath(perfume.image)}
                        alt={perfume.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <span className="absolute left-4 top-4 bg-[#F8F5F0] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#30241D]">
                        AHIMIE
                      </span>
                    </div>

                    <div className="pt-5">
                      <p
                        className={`text-[10px] uppercase tracking-[0.25em] ${
                          collection.dark
                            ? "text-[#D5AD77]"
                            : "text-[#A17B51]"
                        }`}
                      >
                        AHIMIE PERFUMERY
                      </p>

                      <div className="mt-3 flex items-start justify-between gap-4">
                        <h4 className="font-serif text-xl">
                          {perfume.name}
                        </h4>

                        <p
                          className={`shrink-0 font-semibold ${
                            collection.dark
                              ? "text-[#D5AD77]"
                              : "text-[#8A5A14]"
                          }`}
                        >
                          {naira(perfume.price)}
                        </p>
                      </div>

                      <p
                        className={`mt-3 line-clamp-2 text-sm leading-6 ${
                          collection.dark
                            ? "text-white/65"
                            : "text-[#817369]"
                        }`}
                      >
                        {perfume.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ENDING BANNER */}
      <section className="bg-[#EAE0D4] px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#A17B51]">
          YOUR SCENT, YOUR STORY
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
          Find the fragrance that feels like you.
        </h2>

        <p className="mx-auto mt-6 max-w-lg leading-8 text-[#75685D]">
          Explore our complete selection of fragrances
          and discover your next favourite scent.
        </p>

        <Link
          href="/perfumes"
          className="mt-10 inline-block bg-[#30241D] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#A17B51]"
        >
          View all perfumes
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#211A16] px-6 py-12 text-center text-white">
        <h2 className="font-serif text-3xl tracking-[0.15em]">
          AHIMIE
        </h2>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#D5AD77]">
          PERFUMERY
        </p>

        <p className="mt-6 text-sm text-white/50">
          © {new Date().getFullYear()} AHIMIE Perfumery.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
