
"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Perfumes", href: "/perfumes" },
  { name: "Collections", href: "/collections" },
  { name: "Gifts", href: "/gifts" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-[#F8F5F0] text-[#24201D]">
      <div className="bg-[#29231F] px-4 py-2 text-center text-xs tracking-[0.2em] text-[#E7D5B7]">
        DISCOVER YOUR SIGNATURE SCENT
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/ahimie-perfimerie/logo.jpeg"
            alt="Ahimie Perfumery logo"
            width={54}
            height={54}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <h1 className="font-serif text-xl font-semibold tracking-[0.12em] md:text-2xl">
              AHIMIE
            </h1>
            <p className="text-[10px] tracking-[0.35em] text-[#9B7A4D]">
              PERFUMERY
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition hover:text-[#A47C45]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="rounded-md border border-[#D6C8B6] px-4 py-2 text-sm md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[#E5DCCF] bg-[#F8F5F0] px-6 py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
