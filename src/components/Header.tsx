import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="EJEN Company Limited"
              width={120}
              height={45}
              className="md:mr-4"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">About</Link>
            <Link href="/products" className="text-gray-700 hover:text-red-600 font-medium transition-all duration-300 hover:scale-105">Products</Link>
            <Link href="/contact" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100 mt-4">
            <Link href="/" className="block text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-2">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-2">About</Link>
            <Link href="/products" className="block text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 py-2">Products</Link>
            <Link href="/contact" className="block bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 text-center font-medium">Contact Us</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;