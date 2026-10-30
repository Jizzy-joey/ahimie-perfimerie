
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { perfumes } from "../data/pef";

const BASE_PATH = "/ahimie-perfimerie";

// Prevent duplicate base paths in image URLs
const imagePath = (path) => {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) return path;

  if (path.startsWith(`${BASE_PATH}/`)) {
    return path;
  }

  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
};

const naira = (price) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

const categories = ["All", "Men", "Women", "Unisex"];

export default function PerfumesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredPerfumes = perfumes
    .filter((perfume) => {
      const matchesSearch = perfume.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        perfume.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#29231F]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[500px] items-center overflow-hidden bg-[#241D19]">
        <img
          src={`${BASE_PATH}/pef4.jpeg`}
          alt="Ahimie luxury perfume collection"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#211B17]/95 via-[#211B17]/70 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AC72]">
            AHIMIE PERFUMERY
          </p>

          <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-tight text-white md:text-7xl">
            Discover your
            <span className="block italic text-[#D4AC72]">
              signature fragrance.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/75">
            Explore our collection of beautiful fragrances,
            selected for every personality and occasion.
          </p>

          <a
            href="#shop"
            className="mt-10 inline-block bg-[#D4AC72] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#241D19] transition hover:bg-[#E8C493]"
          >
            Explore perfumes
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-24 text-center md:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#A17B51]">
          THE FRAGRANCE EDIT
        </p>

        <h2 className="mt-5 font-serif text-4xl md:text-6xl">
          The Perfume Collection
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-[#817369]">
          Find a scent that complements your style.
          From fresh everyday fragrances to bold
          and unforgettable perfumes.
        </p>
      </section>

      {/* SHOP SECTION */}
      <section
        id="shop"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 md:px-12"
      >
        {/* FILTER BAR */}
        <div className="mb-12 flex flex-col gap-6 border-y border-[#E2D8CB] py-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2.5 text-sm transition ${
                  category === item
                    ? "bg-[#29231F] text-white"
                    : "border border-[#DED4C8] text-[#6C6258] hover:border-[#A47C45]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="search"
              placeholder="Search perfumes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-full border border-[#DED4C8] bg-white px-5 py-3 text-sm outline-none focus:border-[#A47C45]"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-[#DED4C8] bg-white px-5 py-3 text-sm outline-none focus:border-[#A47C45]"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* PRODUCT COUNT */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-[#817369]">
            Showing {filteredPerfumes.length} of {perfumes.length} fragrances
          </p>
        </div>

        {/* PRODUCT GRID */}
        {filteredPerfumes.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="font-serif text-3xl">
              No fragrances found
            </h3>

            <p className="mt-4 text-[#817369]">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
                setSort("featured");
              }}
              className="mt-6 border-b border-[#A17B51] pb-2 text-sm text-[#A17B51]"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPerfumes.map((perfume) => (
              <article key={perfume.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE0D4]">
                  <img
                    src={imagePath(perfume.image)}
                    alt={perfume.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 bg-[#F8F5F0] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#30241D]">
                    {perfume.category || "Fragrance"}
                  </span>
                </div>

                <div className="pt-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#A17B51]">
                    AHIMIE PERFUMERY
                  </p>

                  <h3 className="mt-2 font-serif text-xl">
                    {perfume.name}
                  </h3>

                  <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-[#817369]">
                    {perfume.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E2D8CB] pt-4">
                    <span className="text-lg font-semibold">
                      {naira(perfume.price)}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* BOTTOM BANNER */}
      <section className="bg-[#29231F] px-6 py-24 text-center text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AC72]">
          YOUR SCENT, YOUR STORY
        </p>

        <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl md:text-6xl">
          Elegance in every drop.
        </h2>

        <p className="mx-auto mt-6 max-w-lg leading-8 text-white/65">
          Discover fragrances that make every moment
          a little more memorable.
        </p>
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
