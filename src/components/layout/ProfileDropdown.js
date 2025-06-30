import { useState, useRef, useEffect } from 'react';
import { FiBell, FiSettings, FiUser, FiPackage } from 'react-icons/fi';
import Image from 'next/image';
import adminuser from '../../../public/images/icons/admin user.svg'; // Update this path as per your directory
import Link from 'next/link';

const ProfileDropdown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown container

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when clicking outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up event listener
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="dropdown relative" ref={dropdownRef}>
        <span>
          <Image
            className="cursor-pointer"
            onClick={toggleMenu}
            src={adminuser}
            alt="Admin User"
          />
        </span>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            tabIndex={0}
            className="dropdown-content menu rounded-lg absolute top-[40px] right-0 z-[1] w-80 bg-white p-2 shadow"
          >
            <div className=" rounded-lg p-3 drop-shadow-xl">
              {/* User Information Section */}

              <div className="flex justify-between pb-3">
                <span className="rounded-full bg-[#00A1FF] p-1.5 text-sm text-white">
                  Notifications
                </span>

                <span className="rounded-full bg-[#00A1FF] p-1.5 text-sm text-white">
                  5 New
                </span>
              </div>

              {/* Notifications Section */}
              <div className="py-2">
               <nav className="grid gap-1">
  <div className="flex justify-between items-center">
    <div className='flex gap-2'>
      <FiBell className="h-7 w-7 text-pink-500" />
      <span>Event Today</span>
    </div>
    <span className="text-xs">9:15 AM</span>
  </div>
</nav>
              </div>

              {/* See All Notifications Button */}
              <div className="pt-2">
                <button
                  type="button"
                  className="p-2 rounded-full w-full border-full border-[#00A1FF] border-1 bg-[#00a2ff42] text-[#00A1FF]"
                >
                  <span>See All Notifications</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
