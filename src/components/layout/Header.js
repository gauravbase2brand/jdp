"use client"
import { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-end items-center p-2  gap-3 relative">
      {/* Left Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-100"
      >
        <svg
          width="20px"
          height="20px"
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      {/* Center - Notification Bell Icon */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full text-blue-500 border border-blue-500 hover:bg-blue-100">
          <svg
            width="20px"
            height="20px"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              d="M0 0h24v24H0z"
            />
            <path d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zm6-6V7c0-3.314-2.686-6-6-6s-6 2.686-6 6v9l-2 2v1h16v-1l-2-2z" />
          </svg>
        </button>
      </div>

      {/* Right Profile Icon */}
      <div>
        <ProfileDropdown/>
      </div>
    </header>
  );
};

export default Header;
