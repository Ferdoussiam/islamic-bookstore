import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold tracking-wide">
            Sunnah Store
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-emerald-200 transition">
              Home
            </Link>
            <Link href="/cart" className="hover:text-emerald-200 transition font-semibold">
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}