import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner rounded-t-xl px-4 sm:px-8 py-6 mt-8 text-center text-gray-600">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
        <div className="flex gap-6 justify-center">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/properties" className="hover:text-blue-600 transition">Properties</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
        <div className="text-sm">&copy; {new Date().getFullYear()} RealEstatePro. All rights reserved.</div>
      </div>
    </footer>
  );
} 