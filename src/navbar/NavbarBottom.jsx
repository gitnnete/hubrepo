import React, { useState, useEffect } from "react"; // Added useEffect
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation

const NavbarBottom = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]); // Dependency on location

  return (
    <nav className="bg-gray-900 h-16 relative">
      <div className="container mx-auto max-w-8xl px-4 flex justify-between items-center">
        {/* Menu Items for larger screens */}
        <ul className={`hidden md:flex space-x-4`}>
          <li>
            <NavLink
              to="/" // Link to Home page
              className={({ isActive }) =>
                `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/genres" // Link to Genres page
              className={({ isActive }) =>
                `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
              }
            >
              Genres
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upload" // Link to Upload page
              className={({ isActive }) =>
                `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
              }
            >
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hottestartist" // Link to Hottest Location page
              className={({ isActive }) =>
                `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
              }
            >
              Hottest Artist
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Menu Display */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 absolute top-16 left-0 w-full z-50 border-t border-gray-700">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink
                to="/" // Link to Home page
                className={({ isActive }) =>
                  `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/genres" // Link to Genres page
                className={({ isActive }) =>
                  `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
                }
              >
                Genres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upload" // Link to Upload page
                className={({ isActive }) =>
                  `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
                }
              >
                Upload
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hottestartist" // Link to Hottest Location page
                className={({ isActive }) =>
                  `h-16 bg-gray-900 border-b-8 ${isActive ? 'border-green-500' : 'border-transparent'} cursor-pointer transition duration-200 flex items-center justify-center text-white text-xl`
                }
              >
                Hottest Location
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarBottom;
