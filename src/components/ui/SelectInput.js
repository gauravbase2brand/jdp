import React from 'react';

const SelectInput = ({ IsrequiredSelect, options, selectaname }) => {
  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="gender"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {selectaname}
          {IsrequiredSelect && <span className="text-red-500">*</span>}
        </label>
        <select
          id="gender"
          name="gender"
          className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-6 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required={IsrequiredSelect}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
