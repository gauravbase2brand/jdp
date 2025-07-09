import { useState, useRef, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import Image from 'next/image';
import adminuser from '../../../public/images/icons/admin user.svg'; // Update this path as per your directory
import Link from 'next/link';



const Profile = () => {
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
          <Image src={adminuser}  onClick={toggleMenu}  alt='profile'/>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            tabIndex={0}
            className="dropdown-content menu absolute top-[40px] right-0 z-[1] w-80 rounded-lg bg-white p-2 shadow"
          >
            <div className="rounded-lg p-3 ">
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
                <nav className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className='p-3 bg-[#FFE2EA] rounded-full'>
                    <FaUser className="h-6 w-6  text-pink-500" />

                      </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Event Today</span>
                        <span className='text-[14px] text-[#111827]'>You can customize this</span>
                    </div>
                    </div>
                    <span className="text-xs">9:15 AM</span>
                  </div>

                  {/*  */}
                   <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className='p-3 bg-[#DFF3FF] rounded-full'>
                 <IoMdSettings  className="h-6 w-6  text-[#15A9FF]" />

                      </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Setting</span>
                        <span className='text-[14px] text-[#111827]'>You can customize this</span>
                    </div>
                    </div>
                    <span className="text-xs">9:15 AM</span>
                  </div>

                       <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <div className='p-3 bg-[#FFF5DA] rounded-full'>
                    <FaUser className="h-6 w-6  text-[#FFC11B]" />

                      </div>
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Launch Admin</span>
                        <span className='text-[14px] text-[#111827]'>You can customize this</span>
                    </div>
                    </div>
                    <span className="text-xs">9:15 AM</span>
                  </div>
                </nav>
              </div>

              {/* See All Notifications Button */}
              <div className="pt-2">
                <button
                  type="button"
                  className="border-full font-semibold w-full rounded-full border-1 border-[#00A1FF] hover:bg-[#00a2ff42] p-2 text-[#00A1FF]"
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

export default Profile;
