import { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Component/wrapper';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuItems = {
    Resources: [
      { label: 'Method Development and Validation', link: '/mdv' },
      { label: 'Pollutants Research', link: '/pollutant' },
      { label: 'Food Contaminants Research', link: '/contaminant' },
      { label: 'Phytochemical Research', link: '/phyto' },
    ],
    Products: [
      { label: 'Chemxpert', link: '/xpert' },
      { label: 'Labsoft', link: '/lab' },
    ],
  };

  return (
    <header className="bg-black text-white font-serif shadow-lg sticky top-0 left-0 w-full z-50">
      <Wrapper>
        <nav className="flex justify-between items-center px-4 lg:px-16 py-8">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="text-3xl">☰</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`lg:flex flex-col lg:flex-row lg:gap-8 items-center absolute lg:static bg-black w-full lg:w-auto transition-all duration-300 ease-in-out lg:ml-auto ${
              isMobileMenuOpen ? 'top-16 left-0' : 'top-[-500px] left-0'
            }`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 text-sm font-medium lg:items-center px-4 lg:px-0 lg:ml-auto">
              {/* Home Link */}
              <li>
                <Link
                  to="/"
                  className="capitalize focus:outline-none hover:text-red-500"
                >
                  Home
                </Link>
              </li>

              {/* About Link */}
              <li>
                <Link
                  to="/about"
                  className="capitalize focus:outline-none hover:text-red-500"
                >
                  About
                </Link>
              </li>

              {/* Dropdown Menu Links */}
              {Object.keys(menuItems).map((menu) => (
                <li key={menu} className="relative group">
                  {/* Dropdown Toggle */}
                  <button
                    className="flex items-center capitalize focus:outline-none hover:text-red-500"
                    onClick={() => toggleDropdown(menu)}
                  >
                    {menu}
                    {menuItems[menu].length > 0 && (
                      <span
                        className={`ml-2 transform transition-transform ${
                          activeDropdown === menu ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </button>
                  {/* Dropdown Menu */}
                  {activeDropdown === menu && menuItems[menu].length > 0 && (
                    <ul className="absolute top-full left-0 bg-black text-white mt-2 py-2 shadow-lg rounded-lg z-50 w-48">
                      {menuItems[menu].map((item) => (
                        <li
                          key={item.label}
                          className="py-2 px-4 hover:bg-gray-800 rounded-lg"
                        >
                          <Link to={item.link}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              {/* Contact Link */}
              <li>
                <Link
                  to="/contact"
                  className="capitalize focus:outline-none hover:text-red-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
