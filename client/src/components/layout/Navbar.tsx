"use client";

import Link from 'next/link';
import { UserCircle2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50 font-['Figtree']">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
  <span className="text-2xl font-bold text-black">
    transfer<span className="text-[#52AEA3]">link</span>
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/clubs" className="text-black hover:text-[#52AEA3] transition-colors">
              Clubs
            </Link>
            <Link href="/agents" className="text-black hover:text-[#52AEA3] transition-colors">
              Agents
            </Link>
            <Link href="/players" className="text-black hover:text-[#52AEA3] transition-colors">
              Players
            </Link>
            <Link href="/about" className="text-black hover:text-[#52AEA3] transition-colors">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/sign-in"
              className="flex items-center text-black hover:text-[#52AEA3] transition-colors"
            >
              <UserCircle2 className="w-5 h-5 mr-2" />
              Sign In
            </Link>
            <Link 
              href="/sign-up"
              className="px-4 py-2 text-white bg-[#52AEA3] rounded-lg hover:bg-[#489992] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/clubs" 
                className="text-black hover:text-[#52AEA3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Clubs
              </Link>
              <Link 
                href="/agents" 
                className="text-black hover:text-[#52AEA3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Agents
              </Link>
              <Link 
                href="/players" 
                className="text-black hover:text-[#52AEA3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Players
              </Link>
              <Link 
                href="/about" 
                className="text-black hover:text-[#52AEA3] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <Link 
                  href="/sign-in"
                  className="flex items-center text-black hover:text-[#52AEA3] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserCircle2 className="w-5 h-5 mr-2" />
                  Sign In
                </Link>
                <Link 
                  href="/sign-up"
                  className="px-4 py-2 text-center text-white bg-[#52AEA3] rounded-lg hover:bg-[#489992] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
