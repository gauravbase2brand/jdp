"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Invoiceicon from '../../../../public/images/icons/Invoice Generated icons.svg';
import { SlRefresh } from 'react-icons/sl';
import invoiceadmin from '../../../../public/images/icons/invoiceadmin.svg';
import Intuit_QuickBooks from '../../../../public/images/icons/Intuit_QuickBooks.svg';

const InvoiceGenerated = () => {
const [isRotating, setIsRotating] = useState(false);

const rotateIcon = () => {
  setIsRotating(prev => !prev);
};
  return (
    <div className=" flex items-center justify-between rounded-xl bg-white p-6 shadow-md">
      {/* Left Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex w-[72px] items-center justify-center rounded-full border-[1.5px] border-[#C49E01] bg-yellow-100 p-2">
            <Image
              className="transition-transform duration-200 hover:scale-110"
              src={Invoiceicon}
              alt="Invoice Icon"
              width={24}
              height={24}
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              Invoice Generated
            </p>
            <p className="text-xs text-gray-400">Last updated: 3 min ago</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-gray-800">$8,848</p>
          <p className="mt-1 text-sm text-green-600">▲ 7% this week</p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex w-[72px] items-center justify-center rounded-full bg-green-100 p-2 border-[1.5px] border-[#0B8D27]">
           <SlRefresh
  fontSize={25}
  color="#0B8D27"
  onClick={rotateIcon}
  className={`transition-transform duration-500 ${isRotating ? 'rotate-180' : ''} cursor-pointer`}
/>
          </div>
          <Image className='w-[150px]' src={Intuit_QuickBooks} alt="QuickBooks" width={80} height={20} />
        </div>

        <p className="font-bold text-green-700 text-lg">Connected</p>
      </div>

      {/* Right Illustration */}
      <div className="hidden md:block ">
        <Image className='w-full' src={invoiceadmin} alt="Illustration" width={160} height={160} quality={1000} />
      </div>
    </div>
  );
};

export default InvoiceGenerated;
