"use client";

import React from "react";
import { perfumes } from "./perfumes/pefs";
import Navbar from "./components/Navbar";

const naira = (n) => `₦${n.toLocaleString()}`;

export default function Home() {
  const [feature, ...rest] = perfumes;

  return (
    <div className="min-h-screen bg-[#ECE8EE] text-[#1C1620]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[34rem] w-full overflow-hidden bg-[#1C1620]">
        <img
          src="/pef4.jpeg"
          alt="A bottle of perfume"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1620] via-[#1C1620]/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-6xl">
            Fragrance is the invisible signature of elegance.
          </h1>
          <a
            href="#collection"
            className="mt-10 w-fit rounded-full bg-[#C58B3A] px-8 py-3 font-medium text-[#1C1620] transition hover:bg-[#d89c47]"
          >
            View the collection
          </a>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-3xl md:text-4xl">The collection</h2>
        <p className="mt-2 text-[#1C1620]/70">
          {perfumes.length} fragrances, each priced in naira.
        </p>

        {perfumes.length === 0 && (
          <p className="mt-10">No fragrances are listed yet. Check back soon.</p>
        )}

        {/* Featured: first perfume, shown large */}
        {feature && (
          <article className="mt-12 grid overflow-hidden rounded-3xl bg-[#1C1620] text-white md:grid-cols-2">
            <img
              src={feature.image}
              alt={feature.name}
              className="h-80 w-full object-cover md:h-full"
            />
            <div className="flex flex-col justify-center p-8 md:p-14">
              <h3 className="font-serif text-3xl md:text-4xl">{feature.name}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/75">
                {feature.description}
              </p>
              <p className="mt-6 text-2xl text-[#E0AC62]">{naira(feature.price)}</p>
            </div>
          </article>
        )}

        {/* Remaining perfumes */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((perfume) => (
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
                <p className="shrink-0 font-medium text-[#8A5A14]">
                  {naira(perfume.price)}
                </p>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-[#1C1620]/70">
                {perfume.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}