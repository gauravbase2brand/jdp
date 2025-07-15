'use client';
import React, { useState } from 'react';
import SelectInput from '../ui/SelectInput';
import AddressFields from '../ui/AddressFields';
import Button from '../ui/Button';
import InputCustom from '../ui/InputFiels';

const StaffCreationFormAddressContact = () => {
  const [message, setMessage] = useState(''); // Initialize state for message value

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
    // Update message state when textarea changes
  };
  return (
    <div>
      <div className="  ">
        <h2 className="text-2xl font-bold">Address & Contact</h2>
        <div className="text-primary pb-2 text-base font-semibold">
          Legal Name
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
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
            placeholder="Enter Your City "
            InputLabl="City"
            isRequiredLabel={true}
            inputsize="large"
            inputstatus={false}
          />
             <SelectInput
            IsrequiredSelect={true}
            options={['<span className="text-red-500">*</span> Pending', 'Completed', 'In Progress', 'Assigned']}
            selectaname="State"
            selectOptionStatus={false}
            inputsize="large"
          />
          <InputCustom
            InputType="text"
            placeholder="Enter ZIP code"
            InputLabl="ZIP"
            isRequiredLabel={true}
            inputsize="large"
          />
          <InputCustom
            InputType="text"
            placeholder="Enter phone number"
            InputLabl="Main Phone"
            isRequiredLabel={true}
            inputsize="large"
          />
          {/* <SelectInput
            IsrequiredSelect={true}
            options={['Male', 'Female', 'Other']}
            selectaname="Gender"
            selectOptionStatus={false}
            inputsize="large"
          /> */}

          {/* <InputCustom
            InputType="date"
            placeholder="DOB"
            InputLabl="DOB"
            isRequiredLabel={true}
            inputsize="large"
          /> */}
{/* 
          <SelectInput
            IsrequiredSelect={true}
            options={['Single', 'Married', 'Unmaried']}
            selectaname="Marital Status"
            selectOptionStatus={false}
            inputsize="large"
          /> */}

<InputCustom
            InputType="text"
            placeholder="Enter alt phone number"
            InputLabl="Alt Phone"
            isRequiredLabel={true}
            inputsize="large"
          />


<InputCustom
            InputType="text"
            placeholder="Enter CC Mail"
            InputLabl="CC Mail"
            isRequiredLabel={true}
            inputsize="large"
          />

          <InputCustom
            InputType="text"
            placeholder="Enter mobile number"
            InputLabl="Mobile"
            isRequiredLabel={true}
            inputsize="large"
          />
          <InputCustom
            InputType="text"
            placeholder="Enter website"
            InputLabl="Website"
            isRequiredLabel={true}
            inputsize="large"
          />

       
          <InputCustom
            InputType="text"
            placeholder="Enter fax number"
            InputLabl="FAX"
            isRequiredLabel={true}
            inputsize="large"
          />
          <SelectInput
            IsrequiredSelect={true}
            options={['Delayed', 'Completed', 'In Progress', 'Assigned']}
            selectaname="Other"
            placeholder=" Enter other"
            selectOptionStatus={false}
            inputsize="large"
          />
          {/* <div className="flex items-center justify-end">
              <Button
                uibutton="Next"
                ButtonUi="m-0 rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600"
                PositionBtn="justify-end"
              />
            </div> */}
        </div>


        <h2 className="text-2xl font-bold mt-3">Emergency Contact Info.</h2>
        <div className="text-primary pb-2 text-base font-semibold">
        Contact Name
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

          <InputCustom
            InputType="text"
            placeholder="Enter contact name "
            InputLabl="Secondary Contact"
            isRequiredLabel={true}
            inputsize="large"
          />
             <InputCustom
            InputType="text"
            placeholder="Enter phone number"
            InputLabl="Phone Number"
            isRequiredLabel={true}
            inputsize="large"
            inputstatus={false}
          />
        
          <InputCustom
            InputType="text"
            placeholder="Enter Secondary Phone Number"
            InputLabl="Secondary Phone Number"
            isRequiredLabel={true}
            inputsize="large"
          />
       
          {/* <SelectInput
            IsrequiredSelect={true}
            options={['Male', 'Female', 'Other']}
            selectaname="Gender"
            selectOptionStatus={false}
            inputsize="large"
          /> */}

          {/* <InputCustom
            InputType="date"
            placeholder="DOB"
            InputLabl="DOB"
            isRequiredLabel={true}
            inputsize="large"
          /> */}
{/* 
          <SelectInput
            IsrequiredSelect={true}
            options={['Single', 'Married', 'Unmaried']}
            selectaname="Marital Status"
            selectOptionStatus={false}
            inputsize="large"
          /> */}

          <SelectInput
            IsrequiredSelect={true}
            options={['Mother', 'Father', 'Other']}
            selectaname="Select Relation"
            placeholder=" Enter other"
            selectOptionStatus={false}
            inputsize="large"
          />
         
         <SelectInput
            IsrequiredSelect={true}
            options={['Mother', 'Father', 'Sister', 'Brother', 'Aunt', 'Uncle', 'Grandmother', 'Grandfather', 'Niece', 'Nephew', 'Cousin', 'Other']}
            selectaname="Select Relation (Add More)"
            placeholder=" Enter other"
            selectOptionStatus={false}
            inputsize="large"
          />
          {/* <div className="flex items-center justify-end">
              <Button
                uibutton="Next"
                ButtonUi="m-0 rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600"
                PositionBtn="justify-end"
              />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default StaffCreationFormAddressContact;
