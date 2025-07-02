'use client';
import { useState } from 'react';
import Notifications from './Notifications';
import Profile from './Profile';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="z-10 flex items-center justify-end gap-3 p-2">
      {/* Left Menu Button */}

      {/* Center - Notification Bell Icon */}
      <div className="flex items-center space-x-4">
        <Notifications />

        <Profile />
      </div>

      {/* Right Profile Icon */}
      <div></div>
    </header>
  );
};

export default Header;
