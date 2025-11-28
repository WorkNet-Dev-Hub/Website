import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white">
                <span className="text-lg">WN</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                Work<span className="text-secondary">NET</span>
              </span>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.href ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 flex justify-end">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfGbrarcl1lmz1kkiC7x5JFAiLvqgK9XZVV_G33myrP2AmTA/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex rounded-lg bg-primary px-6 py-2 font-medium text-white transition-colors hover:bg-primary-600"
            >
              Take Survey
            </a>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <LayoutGrid className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? 'block animate-fade-in' : 'hidden'
        } absolute left-0 right-0 top-full bg-white shadow-lg`}
      >
        <div className="space-y-1 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdfGbrarcl1lmz1kkiC7x5JFAiLvqgK9XZVV_G33myrP2AmTA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-md bg-primary px-4 py-2 text-center font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Take Survey
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;