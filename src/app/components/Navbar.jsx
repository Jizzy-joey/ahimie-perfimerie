"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <header className="flex items-center justify-center space-x-10 py-5">
        <img
          className="rounded-full"
          src="/logo.jpeg"
          alt="Ahimie Perfumeries logo"
          width={80}
          height={80}
        />

        <h1 className="text-4xl text-lime-600 font-semibold">
          AHIMIE-PERFUMERIES
        </h1>
      </header>

      <div className="flex justify-center items-center bg-gray-400">
        <ul className="flex flex-row space-x-12 py-4">
          <li>
            <Link href="/">HOME</Link>
          </li>

          <li>
            <Link href="/perfumes">PERFUMES</Link>
          </li>

          <li>
            <Link href="/collections">COLLECTIONS</Link>
          </li>

          <li>
            <Link href="/gifts">GIFTS</Link>
          </li>

          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}