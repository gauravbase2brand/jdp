import React from 'react';

const Input = ({ InputLabl, isRequiredLabel, InputType, icon  ,placeholder }) => {
  return (
    <div>
      {InputLabl && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {InputLabl}
          {isRequiredLabel && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
            {icon}
          </div>
        )}
        {/* Input */}
        <input
          type={InputType || 'text'}
          placeholder={placeholder}
          className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-6 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
