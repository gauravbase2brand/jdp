
'use client';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiBarChart2, FiUser, FiSettings, FiBell, FiBriefcase, FiDollarSign, FiBox, FiUsers, FiUserPlus, FiUserCheck, FiPackage } from 'react-icons/fi';
import logofirst from '../../../public/images/logofirst.svg';
import Image from 'next/image';
import adminuser from '../../../public/images/icons/admin user.svg'; // Update this path as per your directory
// your full menu definition
const menuItems = [
  {
    label: 'Analytics',
    icon: <FiBarChart2 />,
    children: [
      { label: 'Financial Overview', href: '/analytics/finance', icon: <FiDollarSign /> },
      { label: 'Jobs overview',       href: '/analytics/jobs',    icon: <FiBriefcase /> },
      { label: 'Inventory Insights',  href: '/analytics/inventory', icon: <FiBox /> },
    ],
  },
  {
    label: 'User',
    icon: <FiUser />,
    children: [
      { label: 'All',        href: '/users/all',       icon: <FiUsers /> },
      { label: 'Staff',      href: '/users/staff',     icon: <FiUserPlus /> },
      { label: 'Lead Labor', href: '/users/lead-labor',icon: <FiUserCheck /> },
      { label: 'Labor',      href: '/users/labor',      icon: <FiUser /> },
      { label: 'Supplier',   href: '/users/suppliers', icon: <FiPackage /> },
    ],
  },
  

];

export default function Sidebar() {
  // which section is open
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [activeSection, setActiveSection] = useState(menuItems[0].label);

  // find the full object for the active section
  const current = menuItems.find(item => item.label === activeSection);

  return (
  <>
   <div className="flex h-screen ">
      <div className={`absolute top-4  z-10 p-3'  ${menuOpen ? "right-[-86px]" : "left-[90px]" } `}>
        <button onClick={toggleMenu}>
        {menuOpen ? (<>
          <RxCross1  className="cursor-pointer"  fontSize={25}/>
        </>): (<>
    
          <RxHamburgerMenu className="cursor-pointer"  fontSize={25}/>
        </>)}
        </button>
      </div>

      <nav className="flex flex-col justify-between items-center bg-white dark:bg-gray-800 w-20 p-3 py-4 border-r border-gray-200 dark:border-gray-700">
        <div className="flex justify-center items-center flex-col space-y-4">
          {/* logo */}
          <Image src={logofirst} alt="Logo" className="h-8 w-auto mx-auto" />

          {/* icons */}
      <div className='flex flex-col gap-4 w-10 justify-center items-center'>
           {menuItems.map(item => (
            <button
              key={item.label}
              onClick={() => setActiveSection(item.label)}
              className={`
                p-2  transition  flex flex-col items-center justify-center h-10  rounded-full w-full
                ${activeSection === item.label
                  ? 'bg-[#00a2ff42] dark:bg-blue-900 text-[#00A1FF] dark:text-blue-400  rounded-full'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
            </button>
          ))}
      </div>
        </div>

        {/* avatar */}
        <Link href="/profile">
          <Image
            src={adminuser}
            alt="User"
            className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 mb-4"
          />
        </Link>
      </nav>

{menuOpen && (<>
   <aside className="flex flex-col bg-white  flex-1 border-l border-gray-200 w-[500px]">
        {/* header */}
        <div className="px-4 py-3 text-sm font-semibold text-[##2B2B2B] dark:text-gray-400 uppercase">
          {current.label}
        </div>

        {/* child links */}
        <nav className="overflow-y-auto">
          <ul className="mt-2 space-y-1">
            {(current.children || [{ label: current.label, href: current.href }]).map(child => (
              <li key={child.href || child.label}>
                <Link
                  href={child.href || '#'}
                  className="flex items-center px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {child.icon && React.cloneElement(child.icon, { className: 'h-5 w-5 text-gray-500 dark:text-gray-400' })}
                  <span className="ml-3">{child.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
</>)}
   
    </div>
    
  </> 
  );
}
