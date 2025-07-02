'use client';
import React, { useState } from 'react';
import InputFiels from '../ui/InputFiels';
import SelectInput from '../ui/SelectInput';
import AddressFields from '../ui/AddressFields';
import Button from '../ui/Button';

const StaffCreationForm = () => {
  const [message, setMessage] = useState(''); // Initialize state for message value

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
    // Update message state when textarea changes
  };
  return (
    <div>
      <div className='p-6 bg-white shadow-sm rounded-lg container  max-w-7xl m-auto'>
      <form>
          <div className="grid grid-cols-2 gap-5">
          <InputFiels
            InputType="text"
            placeholder="Enter full name "
            InputLabl="First Name"
            isRequiredLabel={true}
          />
          <InputFiels
            InputType="text"
            placeholder="Enter last name "
            InputLabl="Last Name"
            isRequiredLabel={true}
          />
          <InputFiels
            InputType="text"
            placeholder="Enter print on check name"
            InputLabl="Print on Check AS"
            isRequiredLabel={true}
          />
          <InputFiels
            InputType="text"
            placeholder="Enter security no."
            InputLabl="Social Security No"
            isRequiredLabel={true}
          />
          <InputFiels
            InputType="date"
            placeholder="DOB"
            InputLabl="DOB"
            isRequiredLabel={true}
          />
          <SelectInput
            IsrequiredSelect={true}
            options={['Male', 'Female', 'Other']}
            selectaname="Gender"
          />
          <SelectInput
            IsrequiredSelect={true}
            options={['Single', 'Married', 'Unmaried']}
            selectaname="Marital Status"
          />
          <span className="flex items-center">
            <span className="ms-3 text-sm font-medium text-gray-900">
              Disability <span className="text-red-500">*</span>
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:outline-none after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
            </label>
          </span>
          <div>
            <AddressFields
              AddressFieldsName="Message"
              messageValue={message}
              handleMessageChange={handleChange}
            />
          </div>
          <div>
            <span className="text-primary text-lg font-semibold ">I-9 Form</span>
            <SelectInput
              IsrequiredSelect={true}
              options={['Single', 'Married', 'Unmaried']}
              selectaname="On File"
            />
            <InputFiels
              InputType="text"
              placeholder="Work Authorization Exprires"
              InputLabl="Work Authorization Exprires"
              isRequiredLabel={true}
            />
          </div>
          <SelectInput
            IsrequiredSelect={true}
            options={['Delayed', 'Completed', 'In Progress', 'Assigned']}
            selectaname="On File"
          />
        <div className='flex justify-end items-center'>
        <Button uibutton="Next" ButtonUi="m-0 rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600" PositionBtn="justify-end" />

        </div>

        </div>
      </form>
      </div>
    </div>
  );
};

export default StaffCreationForm;
