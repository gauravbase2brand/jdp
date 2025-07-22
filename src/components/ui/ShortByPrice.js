import React from 'react';
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import shortbyprice from '../../../public/images/shortbyprice.svg';
import Image from 'next/image';
const ShortByPrice = () => {
  const items = [
    {
      key: '1',
      label: 'Alphabetical Asc. (A → Z)',
      value: 'Alphabetical Asc. (A → Z)',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-down-az-icon lucide-arrow-down-a-z"
        >
          <path d="m3 16 4 4 4-4" />
          <path d="M7 20V4" />
          <path d="M20 8h-5" />
          <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
          <path d="M15 14h5l-5 6h5" />
        </svg>
      ),
    },
    {
      key: '2',
      label: 'Alphabetical Dsc. (Z → A)',
      value: 'Alphabetical Dsc. (Z → A)',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-arrow-down-za-icon lucide-arrow-down-z-a"
        >
          <path d="m3 16 4 4 4-4" />
          <path d="M7 4v16" />
          <path d="M15 4h5l-5 6h5" />
          <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
          <path d="M20 18h-5" />
        </svg>
      ),
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <button className="flex h-[40px] w-fit items-center gap-2 rounded-[8px] border border-[#d9d9d9] bg-white p-1 px-4 ">
        <Image src={shortbyprice} alt="shortbyprice" />
        <span className="text-sm text-gray-400">Sort By</span>
      </button>
    </Dropdown>
  );
};

export default ShortByPrice;
