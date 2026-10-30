import Link from "next/link";
import Navbar from "../components/Navbar";

const values = [
  {
    title: "A personal signature",
    text: "Fragrance is more than a scent. It helps you express your personality, confidence and individuality.",
  },
  {
    title: "Carefully selected",
    text: "Every fragrance in our collection is chosen for everyday wear, special occasions and memorable moments.",
  },
  {
    title: "Simple to shop",
    text: "We want every customer to enjoy a smooth, easy experience from browsing to buying.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#ECE8EE] text-[#1C1620]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[28rem] w-full overflow-hidden bg-[#1C1620]">
        <img src="/ahimie-perfimerie/pef4.jpeg"
        alt="A bottle of perfume"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1620] via-[#1C1620]/60 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-white md:text-6xl">
            About Ahimie Perfumeries
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Discover fragrances carefully selected to help you express your
            personality, confidence, and individuality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">Our story</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-[#C58B3A]" />
          <p className="mt-8 leading-8 text-[#1C1620]/75">
            At Ahimie Perfumeries, we believe fragrance is more than just a
            scent. It is a personal signature that can create memories, express
            personality, and make every moment special.
          </p>
          <p className="mt-4 leading-8 text-[#1C1620]/75">
            Our collection brings together carefully selected fragrances for
            everyday wear, special occasions, and memorable moments.
          </p>
        </div>

        {/* Image with offset gold frame */}
        <div className="relative">
          <div className="absolute  h-full w-full rounded-3xl border-4 border-[#C58B3A]" />
          <img
            src="/ahimie-perfimerie/amara.jpeg"
            alt="Ahimie Perfumeries fragrance"
            className="relative h-96 w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="font-serif text-3xl md:text-4xl">What we stand for</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl bg-white p-8 shadow-sm motion-safe:transition motion-safe:hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 h-1 w-10 rounded-full bg-[#C58B3A]" />
              <h3 className="font-serif text-xl">{v.title}</h3>
              <p className="mt-3 leading-7 text-[#1C1620]/70">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#1C1620] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Our mission</h2>
          <p className="mt-8 font-serif text-2xl leading-relaxed text-[#E0AC62] md:text-3xl">
            To make beautiful and memorable fragrances accessible.
          </p>
          <p className="mt-6 leading-8 text-white/70">
            We aim to give every customer a simple and enjoyable shopping
            experience.
          </p>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">
          Find the scent that feels like you
        </h2>
        <Link
          href="/#collection"
          className="mt-8 inline-block rounded-full bg-[#C58B3A] px-8 py-3 font-medium text-[#1C1620] transition hover:bg-[#d89c47]"
        >
          View the collection
        </Link>
      </section>
    </div>
  );
}