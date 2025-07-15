'use client';
import React, { useState } from 'react';
import SelectInput from '../ui/SelectInput';
import AddressFields from '../ui/AddressFields';
import Button from '../ui/Button';
import InputCustom from '../ui/InputFiels';
import DateAntDesing from '../ui/DateAntDesing';

const StaffCreationFormEmploymentInfo = () => {
  const [message, setMessage] = useState(''); // Initialize state for message value

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
    // Update message state when textarea changes
  };
  return (
    <div>
      <div className=" ">
        <h2 className="text-2xl font-bold">Address & Contact</h2>
        <div className="text-primary pb-2 text-base font-semibold">
          Legal Name
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <DateAntDesing
            DateLabel="Hire Date "
            inputsize="large"
            inputstatus={false}
            inputrequired={true}
          />
          <DateAntDesing
            DateLabel="Original Hire Date "
            inputsize="large"
            inputstatus={false}
            inputrequired={true}
          />
          <DateAntDesing
            DateLabel="Adjusted Service Date "
            inputsize="large"
            inputstatus={false}
            inputrequired={true}
          />
          <DateAntDesing
            DateLabel="Release Date (Last date on payroll)"
            inputsize="large"
            inputstatus={false}
            inputrequired={true}
          />
        </div>

        <div>
          <div className="text-primary mt-3 pb-2 text-base font-semibold">
            Employment Status
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <SelectInput
            IsrequiredSelect={true}
            options={[' Pending', 'Completed', 'In Progress', 'Assigned']}
            selectaname="State"
            selectOptionStatus={false}
            inputsize="large"
          />
          <SelectInput
            IsrequiredSelect={true}
            options={[' Pending', 'Completed', 'In Progress', 'Assigned']}
            selectaname="State"
            selectOptionStatus={false}
            inputsize="large"
          />
          <SelectInput
            IsrequiredSelect={true}
            options={[' Pending', 'Completed', 'In Progress', 'Assigned']}
            selectaname="State"
            selectOptionStatus={false}
            inputsize="large"
          />
          <SelectInput
            IsrequiredSelect={true}
            options={[' Pending', 'Completed', 'In Progress', 'Assigned']}
            selectaname="State"
            selectOptionStatus={false}
            inputsize="large"
          />
        </div>

        <div className="text-primary mt-3 pb-2 text-base font-semibold">
          Job Details
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <InputCustom
            InputType="text"
            placeholder="Enter contact name"
            InputLabl="Primary Contact"
            isRequiredLabel={true}
            inputsize="large"
            inputstatus={false}
          />
          <SelectInput
            IsrequiredSelect={true}
            options={[
              'Mother',
              'Father',
              'Sister',
              'Brother',
              'Aunt',
              'Uncle',
              'Grandmother',
              'Grandfather',
              'Niece',
              'Nephew',
              'Cousin',
              'Other',
            ]}
            selectaname="Select Relation (Add More)"
            placeholder=" Enter other"
            selectOptionStatus={false}
            inputsize="large"
          />
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <div>
            <SelectInput
              IsrequiredSelect={true}
              options={[
                'Mother',
                'Father',
                'Sister',
                'Brother',
                'Aunt',
                'Uncle',
                'Grandmother',
                'Grandfather',
                'Niece',
                'Nephew',
                'Cousin',
                'Other',
              ]}
              selectaname="Select Relation (Add More)"
              placeholder=" Enter other"
              selectOptionStatus={false}
              inputsize="large"
            />
            <InputCustom
              InputType="text"
              placeholder="Enter Secondary Phone Number"
              InputLabl="Secondary Phone Number"
              isRequiredLabel={true}
              inputsize="large"
            />
          </div>
          <div>
            <AddressFields
              AddressFieldsName="Address"
              messageValue={message}
              handleMessageChange={handleChange}
              placeholderText="Enter address"
              requiredHeight="110px"
            />
          </div>
        </div>

        {/* <div className="flex items-center justify-end">
              <Button
                uibutton="Next"
                ButtonUi="m-0 rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600"
                PositionBtn="justify-end"
              />
            </div> */}
      </div>
    </div>
  );
};

export default StaffCreationFormEmploymentInfo;
