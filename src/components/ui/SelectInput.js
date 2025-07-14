import React, { useEffect, useState } from 'react';
import { Select } from 'antd';

const SelectInput = ({
  IsrequiredSelect,
  options = [],
  selectaname,
  selectOptionStatus,
  inputsize, // 'small' | 'medium' | 'large'
  ...rest
}) => {
  // Map 'medium' to 'middle' for Ant Design
  const mapSize = (size) => {
    if (size === 'large') return 'large';
    if (size === 'medium') return 'middle';
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
      <label
        htmlFor="select-input"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {selectaname}
        {IsrequiredSelect && <span className="text-red-500">*</span>}
      </label>
      <Select
        id="select-input"
        name="select-input"
        size={responsiveSize}
        showSearch
        status={selectOptionStatus ? 'error' : ''}
        placeholder={selectaname}
        style={{ width: '100%' }}
        required={IsrequiredSelect}
        options={options.map((option) =>
          typeof option === 'object'
            ? option
            : { label: option, value: option }
        )}
    
        {...rest}
      />
    </div>
  );
};

export default SelectInput;