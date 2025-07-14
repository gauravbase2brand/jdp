import React, { useEffect, useState } from 'react';
import { Input } from 'antd';

const InputCustom = ({
  InputLabl,
  isRequiredLabel,
  InputType,
  icon,
  placeholder,
  icon2,
  inputsize, // 'small' | 'medium' | 'large'
  inputstatus,
  ...rest
}) => {
  // Map 'medium' to 'middle' for Ant Design
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
    <div className="mb-2">
      {InputLabl && (
        <label className="mb-1 block text-sm font-semibold text-gray-800 tracking-wide">
          {InputLabl}
          {isRequiredLabel && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-4 flex items-center text-gray-400 h-full">
            {icon}
          </span>
        )}
        <Input
          type={InputType || 'text'}
          placeholder={placeholder}
          size={responsiveSize}
          status={inputstatus ? 'error' : ''}
          // className={`w-full rounded-xl border bg-white py-2 pr-12 pl-${icon ? '12' : '4'} text-gray-700 placeholder-gray-400 shadow-sm transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none placeholder:text-base hover:border-blue-300`}
          {...rest}
        />
        {icon2 && (
          <span className="absolute right-4 flex items-center text-gray-400 h-full">
            {icon2}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputCustom;
