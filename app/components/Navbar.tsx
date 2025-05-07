'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Sobre mí
              </Link>
              <Link href="/#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Proyectos
              </Link>
              <Link href="/#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Sobre mí
            </Link>
            <Link href="/#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Proyectos
            </Link>
            <Link href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 