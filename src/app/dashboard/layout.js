"use client"
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [opening,setOpening]=useState(true);
  console.log("opening",opening);
  
  return (
    <>
      <div className="flex lg:flex-row h-full justify-center">
        {/* Sidebar */}
        <div className=' relative z-50   max-w-[730px] '>
          <aside className="fixed h-full">
            <Sidebar  setOpening={setOpening}/>
          </aside>
        </div>

        {/* Main content */}
        <main className="flex-1 lg:pl-6 lg:pr-6 pl-4 pr-4 pb-6 lg:pt-3 lg:pb-6">
          <Header />
         <div className={`${opening ? '  xl:ml-[300px]' : 'ms-[60px] xl:m-auto xl:container 2xl:max-w-7xl'} space-y-6 `}>
           <div className="">{children}</div>
         </div>
        </main>
      </div>
    </>
  );
}
