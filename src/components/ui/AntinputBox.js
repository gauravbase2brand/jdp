import React, { useState } from 'react';
import { Input } from 'antd';

const AntinputBox = ({inputInputLabel,isRequiredLabel}) => {
  // Create a state to hold the input value
  const [address, setAddress] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <div>
        <label className="mb-2 text-sm text-gray-600">
          {inputInputLabel}  {isRequiredLabel && <span className="text-red-500"> *</span>}
        </label>
        <Input
          size="large"
          className='p-10'
          name="address"
          value={address} // Bind the value to the state
          placeholder="Enter address"
          type="text"
          style={{ borderRadius: '10px' }}
          onChange={handleInputChange} // Update state on change
        />
      </div>
    </div>
  );
};

export default AntinputBox;
