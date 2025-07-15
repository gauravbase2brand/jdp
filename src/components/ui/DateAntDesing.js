'use client'
import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd';
const DateAntDesing = ({ DateLabel, inputsize, inputstatus, inputrequired }) => {


  const mapSize = (size) => {
    if (size === 'medium') return 'middle';
    if (size === 'large') return 'large';
    return 'medium';
  };
  
  const [responsiveSize, setResponsiveSize] = useState(mapSize(inputsize));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setResponsiveSize('medium');
      } else {
        setResponsiveSize(mapSize(inputsize));
      }
    };
    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [inputsize]);
  return (


    <>
    <div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-800 tracking-wide">{DateLabel} {inputrequired ? <span className="text-red-500"> *</span> : ''}</label>
        <DatePicker
          size={responsiveSize}
          style={{ width: '100%', borderRadius: '10px' }}
          placeholder="Select Date"
         status={inputstatus ? 'error' : ''}
        />
      </div>
    </div>
    </>
  );
};

export default DateAntDesing;
