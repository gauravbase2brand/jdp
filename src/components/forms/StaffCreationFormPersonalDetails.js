'use client';
import React, { useState } from 'react';
import SelectInput from '../ui/SelectInput';
import AddressFields from '../ui/AddressFields';
import Button from '../ui/Button';
import InputCustom from '../ui/InputFiels';

const StaffCreationFormPersonalDetails = () => {
  const [message, setMessage] = useState(''); // Initialize state for message value

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
    // Update message state when textarea changes
  };
  return (
    <div>
      <div className="container m-auto max-w-7xl rounded-lg bg-white md:p-6 p-3 shadow-sm">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 ">
            <InputCustom
              InputType="text"
              placeholder="Enter full name "
              InputLabl="First Name"
              isRequiredLabel={true}
              inputsize="large"
              inputstatus={false}
            />
            <InputCustom
              InputType="text"
              placeholder="Enter last name "
              InputLabl="Last Name"
              isRequiredLabel={true}
              inputsize="large"
            />
            <InputCustom
              InputType="text"
              placeholder="Enter print on check name"
              InputLabl="Print on Check AS"
              isRequiredLabel={true}
              inputsize="large"
            />
            <InputCustom
              InputType="text"
              placeholder="Enter security no."
              InputLabl="Social Security No"
              isRequiredLabel={true}
              inputsize="large"
            />
             <SelectInput
              IsrequiredSelect={true}
              options={['Male', 'Female', 'Other']}
              selectaname="Gender"
              selectOptionStatus={false}
              inputsize="large"
            />
           
            <InputCustom
              InputType="date"
              placeholder="DOB"
              InputLabl="DOB"
              isRequiredLabel={true}
              inputsize="large"
            />
           
            <SelectInput
              IsrequiredSelect={true}
              options={['Single', 'Married', 'Unmaried']}
              selectaname="Marital Status"
              selectOptionStatus={false}
                    inputsize="large"
            />
               <InputCustom
              InputType="text"
              placeholder="Enter your email address"
              InputLabl="U.S Status"
              isRequiredLabel={true}
              inputsize="large"
            />
                <InputCustom
              InputType="text"
              placeholder="Ethnicity"
              InputLabl="Ethnicity"
              isRequiredLabel={true}
              inputsize="large"
            />
            <span className="flex items-center gap-2">
              <span className="md:ms-3 text-sm font-medium text-gray-900">
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
                placeholderText="Enter message"
                requiredHeight="150px"
              />
            </div>
            <div>
              <span className="text-primary text-base font-semibold">
                I-9 Form
              </span>
              <SelectInput
                IsrequiredSelect={true}
                options={['Single', 'Married', 'Unmaried']}
                selectaname="On File"
                selectOptionStatus={false}
                inputsize="large"
              />
              <InputCustom
                InputType="text"
                placeholder="Enter full name"
                InputLabl="Work Authorization Exprires"
                isRequiredLabel={true}
                inputsize="large"
              />
            </div>
            <SelectInput
              IsrequiredSelect={true}
              options={['Delayed', 'Completed', 'In Progress', 'Assigned']}
              selectaname="Select"
              placeholder=" Active"
              selectOptionStatus={false}
              inputsize="large"
            />
            <div className="flex items-center justify-end">
              <Button
                uibutton="Next"
                ButtonUi="m-0 rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600"
                PositionBtn="justify-end"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StaffCreationFormPersonalDetails;
