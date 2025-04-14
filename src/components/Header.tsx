import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursOpen, setIsToursOpen] = useState(false);

  useEffect(() => {
    // Attach googleTranslateElementInit to the window object
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,mr,hi',
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.googleTranslateElementInit; // Clean up
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-orange-600">
            Siddhivinayak Tours
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <div id="google_translate_element" className="mr-4"></div> */}
            <Link to="/" className="hover:text-orange-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-600">
              About Us
            </Link>
            <div className="relative group">
              <button
                className="flex items-center hover:text-orange-600"
                onClick={() => setIsToursOpen(!isToursOpen)}
              >
                Tours <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToursOpen && (
                <div className="absolute hidden md:block group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                  <Link
                    to="/tours/national"
                    className="block px-4 py-2 hover:bg-orange-50"
                    onClick={() => setIsToursOpen(false)} // Close dropdown on click
                  >
                    National Tours
                  </Link>
                  <Link
                    to="/tours/international"
                    className="block px-4 py-2 hover:bg-orange-50"
                    onClick={() => setIsToursOpen(false)} // Close dropdown on click
                  >
                    International Tours
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="hover:text-orange-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            {/* <div id="google_translate_element_mobile" className="mb-4"></div> */}
            <Link to="/" className="block py-2 hover:text-orange-600">
              Home
            </Link>
            <Link to="/about" className="block py-2 hover:text-orange-600">
              About Us
            </Link>
            <div>
              <button
                className="flex items-center py-2 w-full hover:text-orange-600"
                onClick={() => setIsToursOpen(!isToursOpen)}
              >
                Tours <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isToursOpen && (
                <div className="pl-4">
                  <Link
                    to="/tours/national"
                    className="block py-2 hover:text-orange-600"
                    onClick={() => setIsToursOpen(false)} // Close dropdown on click
                  >
                    National Tours
                  </Link>
                  <Link
                    to="/tours/international"
                    className="block py-2 hover:text-orange-600"
                    onClick={() => setIsToursOpen(false)} // Close dropdown on click
                  >
                    International Tours
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="block py-2 hover:text-orange-600">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;