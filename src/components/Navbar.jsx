"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md rounded-b-xl px-4 sm:px-8 py-3 flex items-center justify-between sticky top-0 z-50 border-b-2 border-blue-100">
      <Link href="/" className="text-2xl font-extrabold text-blue-700 tracking-tight drop-shadow">RealEstatePro</Link>
      <button
        className="sm:hidden flex flex-col justify-center items-center"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-blue-700 mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-blue-700 mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-blue-700 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      <div className={`sm:flex gap-8 items-center font-bold text-blue-800 ${open ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-md rounded-b-xl py-4 border-b-2 border-blue-100' : 'hidden'} sm:static sm:bg-transparent sm:shadow-none sm:rounded-none sm:py-0 sm:border-0`}> 
        <Link href="/" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-900 transition">Home</Link>
        <Link href="/properties" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-900 transition">Properties</Link>
        <Link href="/about" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-900 transition">About</Link>
        <Link href="/contact" className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-blue-900 transition">Contact</Link>
      </div>
    </nav>
  );
} 