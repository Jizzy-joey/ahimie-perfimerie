
"use client";

import React from "react";
import Link from "next/link";
import { perfumes } from "./data/pef";
import Navbar from "./components/Navbar";

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

export default function Home() {
  const featured = perfumes[0];
  const collection = perfumes.slice(0, 8);

  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#30241D]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#E9DED0] lg:min-h-[740px]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center lg:min-h-[740px] lg:grid-cols-2">
          <div className="relative z-10 px-6 py-20 md:px-12 lg:py-28">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-[#9D754A]">
              The Art of Fine Fragrance
            </p>

            <h1 className="max-w-xl font-serif text-6xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              A scent
              <span className="block italic text-[#9D754A]">
                to remember.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-8 text-[#74665B]">
              An exquisite selection of fragrances crafted
              to celebrate individuality, confidence,
              and timeless elegance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/perfumes"
                className="bg-[#30241D] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9D754A]"
              >
                Explore fragrances
              </Link>

              <a
                href="#story"
                className="border-b border-[#30241D] pb-2 text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Our philosophy
              </a>
            </div>

            <div className="mt-16 flex items-center gap-5">
              <div className="h-px w-12 bg-[#A68B70]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[#8C7968]">
                Elegance in every drop
              </p>
            </div>
          </div>

          <div className="relative h-[440px] w-full lg:h-full">
            <img
              src={`${BASE_PATH}/pef4.jpeg`}
              alt="Luxury fragrance from Ahimie Perfumery"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#E9DED0]/40 to-transparent lg:from-[#E9DED0]/20" />

            <div className="absolute bottom-8 left-8 border border-white/50 bg-[#F7F3ED]/90 px-7 py-5 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#9D754A]">
                AHIMIE PERFUMERY
              </p>
              <p className="mt-2 font-serif text-xl italic">
                The essence of luxury
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-y border-[#E7DDD0] bg-[#F7F3ED]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-16 gap-y-5 px-6 py-8 text-[11px] uppercase tracking-[0.3em] text-[#8D755C]">
          <span>Timeless elegance</span>
          <span className="hidden text-[#BCA58D] sm:inline">✦</span>
          <span>Signature scents</span>
          <span className="hidden text-[#BCA58D] sm:inline">✦</span>
          <span>Everyday luxury</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-24 text-center md:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#A17B51]">
          The Collection
        </p>

        <h2 className="mt-5 font-serif text-4xl md:text-6xl">
          Discover your essence
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-[#817369]">
          Fragrance is more than an accessory.
          It is a feeling, a memory, and a lasting impression.
        </p>
      </section>

      {/* PRODUCT COLLECTION */}
      <section
        id="collection"
        className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:px-12"
      >
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#A17B51]">
              Curated for you
            </p>
            <h3 className="mt-3 font-serif text-3xl">
              Featured fragrances
            </h3>
          </div>

          <Link
            href="/perfumes"
            className="border-b border-[#30241D] pb-2 text-xs font-semibold uppercase tracking-wider"
          >
            View all
          </Link>
        </div>

        {collection.length === 0 ? (
          <p className="py-12 text-center text-[#817369]">
            Our fragrance collection is coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {collection.map((perfume, index) => (
              <article key={perfume.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE0D4]">
                  <img
                    src={imagePath(perfume.image)}
                    alt={perfume.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {index === 0 && (
                    <span className="absolute left-4 top-4 bg-[#F7F3ED] px-4 py-2 text-[10px] uppercase tracking-[0.2em]">
                      Featured
                    </span>
                  )}
                </div>

                <div className="pt-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#A17B51]">
                    AHIMIE PERFUMERY
                  </p>

                  <h4 className="mt-2 font-serif text-xl">
                    {perfume.name}
                  </h4>

                  <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-6 text-[#817369]">
                    {perfume.description}
                  </p>

                  <p className="mt-4 font-medium text-[#30241D]">
                    {naira(perfume.price)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/perfumes"
            className="inline-block border border-[#30241D] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-[#30241D] hover:text-white"
          >
            Shop all fragrances
          </Link>
        </div>
      </section>

      {/* EDITORIAL STORY */}
      <section id="story" className="bg-[#EAE0D4]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-[400px] lg:min-h-[600px]">
            <img
              src={`${BASE_PATH}/pef8.jpeg`}
              alt="Perfume from the Ahimie collection"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-20 md:px-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[#A17B51]">
              The Ahimie Experience
            </p>

            <h2 className="mt-7 max-w-lg font-serif text-4xl leading-tight md:text-6xl">
              Beauty that
              <span className="block italic text-[#A17B51]">
                lingers.
              </span>
            </h2>

            <p className="mt-8 max-w-md leading-8 text-[#75685D]">
              Some moments deserve to be remembered.
              Discover fragrances that complement your
              personality and make every entrance unforgettable.
            </p>

            <Link
              href="/about"
              className="mt-10 w-fit border-b border-[#30241D] pb-2 text-xs font-semibold uppercase tracking-[0.2em]"
            >
              Discover our story
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PERFUME */}
      {featured && (
        <section className="bg-[#30241D] px-6 py-24 text-white md:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#D5AD77]">
                Featured Fragrance
              </p>

              <h2 className="mt-6 font-serif text-5xl md:text-6xl">
                {featured.name}
              </h2>

              <p className="mt-7 max-w-lg leading-8 text-white/65">
                {featured.description}
              </p>

              <p className="mt-8 font-serif text-3xl text-[#D5AD77]">
                {naira(featured.price)}
              </p>

              <Link
                href="/perfumes"
                className="mt-10 inline-block bg-[#D5AD77] px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#30241D] transition hover:bg-[#E7C69A]"
              >
                Explore collection
              </Link>
            </div>

            <div className="aspect-square overflow-hidden bg-[#4B3C31]">
              <img
                src={imagePath(featured.image)}
                alt={featured.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-[#211A16] px-6 py-16 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row">
          <div>
            <h2 className="font-serif text-3xl tracking-[0.15em]">
              AHIMIE
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#D5AD77]">
              PERFUMERY
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Discover fragrances that leave
              an unforgettable impression.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-white/70">
            <Link href="/">Home</Link>
            <Link href="/perfumes">Perfumes</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/gifts">Gifts</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="mx-auto max-w-7xl pt-8 text-xs text-white/45">
          © {new Date().getFullYear()} AHIMIE Perfumery.
          All rights reserved.
        </div>
      </footer>
    </main>
  );
}
