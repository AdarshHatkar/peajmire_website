"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-around border-1 border-green-500 ">
        <h1>Header Component </h1>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-blue-500">
          About
        </Link>
      </div>
    </>
  );
}
