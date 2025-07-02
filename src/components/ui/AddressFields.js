import React from 'react';

const AddressFields = ({ AddressFieldsName, messageValue, handleMessageChange }) => {
  return (
    <div>
      <div className="">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          {AddressFieldsName}
        </label>
        <textarea
          placeholder="Enter address"
          id="message"
          value={messageValue} // Use the passed messageValue prop
          onChange={handleMessageChange} // Handle changes to the textarea
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
    </div>
  );
};

export default AddressFields;
