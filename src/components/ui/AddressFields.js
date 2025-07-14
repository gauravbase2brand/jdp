import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const AddressFields = ({
  AddressFieldsName,
  messageValue,
  handleMessageChange,
  placeholderText,
  requiredHeight,
}) => {
  return (
    <div>
      <div className="">
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {AddressFieldsName}
        </label>
        <TextArea
          size="large"
          // rows={20}
          placeholder={placeholderText}
          id="message"
          value={messageValue} // Use the passed messageValue prop
          onChange={handleMessageChange} // Handle changes to the textarea
          name="message"
          style={{ width: '100%' , height: requiredHeight }}
        ></TextArea>
      </div>
    </div>
  );
};

export default AddressFields;
