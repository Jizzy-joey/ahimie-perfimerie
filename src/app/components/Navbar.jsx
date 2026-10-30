
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Perfumes", href: "/perfumes" },
  { name: "Collections", href: "/collections" },
  { name: "Gifts", href: "/gifts" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F8F5F0] shadow-sm">
      {/* Announcement bar */}
      <div className="bg-[#2B211C] px-4 py-2.5 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D8B78A] sm:text-xs">
          The art of fine fragrance • Discover your signature scent
        </p>
      </div>

      {/* Main navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 lg:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/ahimie-perfimerie/logo2.jpg"
            alt="Ahimie Perfumery logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full border border-[#D8C5AA] object-cover sm:h-14 sm:w-14"
          />

          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold tracking-[0.12em] text-[#2B211C] sm:text-2xl">
              AHIMIE
            </span>

            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.35em] text-[#A47C45] sm:text-[10px]">
              PERFUMERIES
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" &&
                pathname.startsWith(link.href + "/"));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#A47C45]"
                    : "text-[#3D322B] hover:text-[#A47C45]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#A47C45] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop call to action */}
        <Link
          href="/perfumes"
          className="hidden border border-[#2B211C] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2B211C] transition duration-300 hover:bg-[#2B211C] hover:text-white lg:inline-flex"
        >
          Explore Scents
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[#D8C5AA] lg:hidden"
        >
          <span
            className={`h-[2px] w-5 bg-[#2B211C] transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-[#2B211C] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-[#2B211C] transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#E8DED1] bg-[#F8F5F0] px-6 py-6 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-[#E8DED1] py-4 text-sm font-medium uppercase tracking-[0.15em] transition hover:text-[#A47C45] ${
                  pathname === link.href
                    ? "text-[#A47C45]"
                    : "text-[#3D322B]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center font-serif text-lg italic text-[#A47C45]">
            Elegance in every drop.
          </p>
        </div>
      )}
    </nav>
  );
}
