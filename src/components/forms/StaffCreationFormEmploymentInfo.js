'use client';
import React, { useState } from 'react';
import SelectInput from '../ui/SelectInput';
import AddressFields from '../ui/AddressFields';
import Button from '../ui/Button';
import InputCustom from '../ui/InputFiels';
import DateAntDesing from '../ui/DateAntDesing';

const StaffCreationFormEmploymentInfo = () => {
  const [message, setMessage] = useState(''); // Initialize state for message value
  const [activeTab, setActiveTab] = useState('Employment');
  const handleChange = (tabid) => {
    setActiveTab(tabid);
    // Update message state when textarea changes
  };
  return (
    <div>
      <div className=" ">
      <div>
          <h2 className="text-2xl font-bold">Employment Info</h2>
        
        </div>
        <div className="flex gap-2 my-3">
         {['Employment', 'Leave of Absence' , 'Termination'] .map((tab, index)=>(
          <button
          key={index}
          className={`${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white border-1 border-black text-lightext'} p-2 rounded-md`}
          onClick={() => handleChange(tab)}
          >
            {tab}
          </button>
         ))}
        </div>
        <div className="text-primary pb-2 text-base font-semibold">
      {activeTab === 'Employment' ? 'Employment Dates' : activeTab === 'Leave of Absence' ? 'Leave of Absence Dates' : 'Termination Dates'}
                </div>

        {activeTab === 'Employment' && (
          <>
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
          </>
        )}
        {activeTab === 'Leave of Absence' && <div>Leave of Absence</div>}
        {activeTab === 'Termination' && (
          <>
            {/* Termination Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
              <DateAntDesing
                DateLabel="Last Day Worked"
                inputsize="large"
                inputstatus={false}
                inputrequired={true}
              />
              <DateAntDesing
                DateLabel="Last Day on Benefits Worked"
                inputsize="large"
                inputstatus={false}
                inputrequired={true}
              />
              <DateAntDesing
                DateLabel="Release Date (Last day on payroll)"
                inputsize="large"
                inputstatus={false}
                inputrequired={true}
              />
            </div>

            {/* Termination Details */}
            <div className="text-blue-500 mt-3 pb-2 text-base font-semibold">
              Termination Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
              <SelectInput
                IsrequiredSelect={true}
                options={['Voluntary', 'Involuntary', 'Layoff', 'Other']}
                selectaname="Termination Type"
                selectOptionStatus={false}
                inputsize="large"
              />
              <InputCustom
                InputType="text"
                placeholder="Enter termination reason"
                InputLabl="Termination Reason"
                isRequiredLabel={true}
                inputsize="large"
                inputstatus={false}
              />
              <SelectInput
                IsrequiredSelect={true}
                options={['Yes', 'No']}
                selectaname="Termination Rehire"
                selectOptionStatus={false}
                inputsize="large"
              />
              <SelectInput
                IsrequiredSelect={true}
                options={['Yes', 'No']}
                selectaname="Protest Unemployment"
                selectOptionStatus={false}
                inputsize="large"
              />
            </div>

            {/* Severance Pay */}
            <div className="text-blue-500 mt-3 pb-2 text-base font-semibold">
              Severance Pay
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
              <SelectInput
                IsrequiredSelect={true}
                options={['Paid', 'Not Paid']}
                selectaname="Severance Paid"
                selectOptionStatus={false}
                inputsize="large"
              />
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  className="w-full border rounded-md p-2 min-h-[48px]"
                  placeholder="Enter message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StaffCreationFormEmploymentInfo;
