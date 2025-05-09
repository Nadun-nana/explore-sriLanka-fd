import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary-600' : 'text-white'
            }`}
          >
            <span className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 mr-2"
              >
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              TravelSL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Destinations
            </Link>
            <Link 
              to="/gallery" 
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/create" 
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              Share Experience
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl mt-2 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/create"
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary-500 text-white hover:bg-primary-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Share Experience
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
