// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <nav>
          <Link href="/" className="px-4 text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="px-4 text-gray-700 hover:text-blue-600">About Me</Link>
          <Link href="/contact" className="px-4 text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
