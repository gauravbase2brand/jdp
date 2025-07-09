import { SiGooglemaps } from 'react-icons/si';
import { DatePicker, Space } from 'antd';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Input from '../ui/InputFiels';
import InputCustom from '../ui/InputFiels';
import { Radio } from 'antd';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../ui/Button';
// Define the MAX_COUNT constant, you can adjust this based on your requirement
const MAX_COUNT = 1; // Make sure to define it

// Stepper Component
const suffix = (
  <span>
    {/* Display how many options are selected */}
    <DownOutlined />
  </span>
);

const Stepper = ({ currentStep }) => {
  return (
    <>
      <div className="relative m-auto md:mb-6 mb-4 flex md:w-1/3 w-1/2 items-center justify-between overflow-hidden">
        {/* Stepper Circles */}
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`relative z-10 flex md:h-12 md:w-12 h-8 w-8   items-center justify-center rounded-full ${currentStep >= step ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {step}
            </div>

            {/* Line Between Circles */}
            {index < 2 && (
              <div
                className={`absolute h-[2px] w-[100%] ${currentStep >= step + 1 ? 'bg-blue-500' : 'bg-gray-300'} mx-2`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

// Step 1: Job Selection
const Step1 = ({ jobType, handleJobTypeChange, setValue, value }) => {
  // const [value, setValue] = useState(""); // Set default selected value
  console.log('valur>>>', value);

  // Handle multiple selection change
  const handleValueChange = (newValue) => {
    setValue(newValue);
    handleJobTypeChange(newValue);
  };

  return (
    <div className="mt-8">
      <h3 className="text-center text-xl font-semibold">Select Job Type</h3>
      <p className="mt-2 mb-4 text-center text-gray-500">
        Please select the appropriate job type from the list below to ensure
        accurate processing and assignment of your task or request.
      </p>

      <div className="m-a flex justify-center">
        <Select
          maxTagCount={MAX_COUNT} // Limit the number of selected items
          value={value}
          style={{ width: '80%' }}
          className="m-auto !h-10"
          onChange={handleValueChange}
          suffixIcon={suffix} // Show selected count in suffix
          placeholder="Select job type"
          options={[
            { value: 'ServiceBased', label: 'Service Based' },
            { value: 'ContractBased', label: 'Contract Based' },
          ]}
        />
      </div>
    </div>
  );
};

// Step 2: Job Details
const Step2 = ({ value, size }) => {
  const { RangePicker } = DatePicker;

  const [redioSelect, setredioSelect] = useState(1);

  const onRadioChange = (e) => {
    setredioSelect(e.target.value);
  };
  return (
    <div className="">
      <h3 className="mb-2 text-left text-xl font-semibold">
        {value === 'ContractBased' ? 'Contract Based Job' : 'Service Based Job'}
      </h3>

      <form>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Select Contractor <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-10"
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Benjamin',
                },
                {
                  value: '2',
                  label: 'James',
                },
                {
                  value: '3',
                  label: 'Alexander',
                },
                {
                  value: '4',
                  label: 'Samuel',
                },
                {
                  value: '5',
                  label: 'Thomas',
                },
                {
                  value: '6',
                  label: 'Matthew',
                },
              ]}
            />
          </div>
          <div>
            <InputCustom
              InputType="text"
              placeholder="Enter job id."
              InputLabl="Job Id."
              isRequiredLabel={true}
            />
          </div>
          <div>
            <InputCustom
              InputType="text"
              placeholder="Enter job title"
              InputLabl="Job Title"
              isRequiredLabel={true}
            />
          </div>
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Billing Status <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-10 placeholder-amber-200"
              placeholder="Enter billing status"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Billable',
                },
                {
                  value: '2',
                  label: 'Non billable',
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-3">
          <div>
            <InputCustom
              InputType="url"
              placeholder="Enter address"
              InputLabl="Address"
              isRequiredLabel={true}
              icon2={<SiGooglemaps />}
            />
          </div>
        </div>
        <div>
          <div className="mt-3 mb-6 grid grid-cols-2 gap-3">
            <div>
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Job Description <spam className="text-red-500">*</spam>
              </span>
              <textarea
                className="h-full w-full rounded-lg border border-gray-300 py-2 pr-4 pl-3 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter message"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Warranty <spam className="text-red-500">*</spam>
                </span>
                <Radio.Group
                  name="radiogroup"
                  onChange={onRadioChange}
                  defaultValue={1}
                  options={[
                    { value: 1, label: 'Yes', style: { fontSize: '1rem' } },
                    { value: 2, label: 'No', style: { fontSize: '1rem' } },
                  ]}
                />
              </div>
              {redioSelect == 1 && (
                <>
                  <div>
                    <RangePicker size={size}></RangePicker>
                  </div>
                </>
              )}

              <div>
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Job Completion Status <spam className="text-red-500">*</spam>
                </span>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  large
                  className="!h-10"
                  placeholder="Search to Select"
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '')
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Assigned',
                    },
                    {
                      value: '2',
                      label: 'Completed',
                    },
                    {
                      value: '3',
                      label: 'Delayed',
                    },
                    {
                      value: '4',
                      label: 'Pending',
                    },
                    {
                      value: '5',
                      label: 'Delayed',
                    },
                    {
                      value: '6',
                      label: 'Completed',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Step 3: Confirmation
const Step3 = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('transactions');
  const [textAreaData, setTextAreaData] = useState('');
  // Function to change active tab
  const showTab = (tabName) => {
    setActiveTab(tabName);
  };
  const [togle, settogel] = useState(false);

  const handelTogle = () => {
    settogel(!togle);
  };
  const tableData = [
    {
      title: 'Acme Plumbing',
      type: 'Invoice',
      num: '1001',
      date: '01/07/2025',
      account: '2000 Trade Services',
      memo: 'Plumbing work completed',
      poNumber: 'PO-1001',
      openBalance: '3,500.00',
    },
    {
      title: 'Bright Electrical',
      type: 'Receipt',
      num: '1002',
      date: '02/07/2025',
      account: '2100 Electrical',
      memo: 'Payment received for wiring',
      poNumber: 'PO-1002',
      openBalance: '0.00',
    },
    {
      title: 'Green Landscapes',
      type: 'Invoice',
      num: '1003',
      date: '03/07/2025',
      account: '2200 Landscaping',
      memo: 'Garden maintenance service',
      poNumber: 'PO-1003',
      openBalance: '1,200.00',
    },
    {
      title: 'Safe Security',
      type: 'Invoice',
      num: '1004',
      date: '04/07/2025',
      account: '2300 Security',
      memo: 'Alarm system installation',
      poNumber: 'PO-1004',
      openBalance: '2,800.00',
    },
    {
      title: 'Cool Air Solutions',
      type: 'Receipt',
      num: '1005',
      date: '05/07/2025',
      account: '2400 Air Conditioning',
      memo: 'Payment for AC repair',
      poNumber: 'PO-1005',
      openBalance: '0.00',
    },
    {
      title: 'Acme Plumbing',
      type: 'Invoice',
      num: '1001',
      date: '01/07/2025',
      account: '2000 Trade Services',
      memo: 'Plumbing work completed',
      poNumber: 'PO-1001',
      openBalance: '3,500.00',
    },
    {
      title: 'Bright Electrical',
      type: 'Receipt',
      num: '1002',
      date: '02/07/2025',
      account: '2100 Electrical',
      memo: 'Payment received for wiring',
      poNumber: 'PO-1002',
      openBalance: '0.00',
    },
  ];

  const txtData = (e) => {
    setTextAreaData(e.target.value); // Update state when textarea content changes
  };

  // Handle form submission
  const noteData = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Textarea Data:', textAreaData); // Log the state value
  };
  
  return (
    <div className="mt-8">
     
      <div className="grid grid-cols-1 mb-3">
        {/* Job Information Section */}
       
        <div className="mb-3 rounded-3xl bg-white md:p-6 p-3 relative">
           <button
          onClick={handelTogle}
          className="bg-primary animate-popup absolute top-[-5px] right-4 rounded-full p-2 text-white opacity-70 transition-opacity duration-300 hover:opacity-100 active:opacity-50"
        >
          {togle ? (
            <>
              <IoIosArrowDown />
            </>
          ) : (
            <>
              <IoIosArrowUp />
            </>
          )}
        </button>
          {togle ? (
            <>
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left Column: Job Information */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Job Information
                  </h2>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Job ID:</span>
                      <span className="font-semibold text-black">
                        5769 Sunnybrook
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">
                        Customer Name:
                      </span>
                      <span className="font-semibold text-black">Richard</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Job Status:</span>
                      <span className="font-semibold text-black">None</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Bill To:</span>
                      <span className="font-semibold text-black">
                        Mag Outman
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Address:</span>
                      <span className="font-semibold text-black">
                        5769 Sunnybrook Circle Mannerist MN 55345
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Column: Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Contact Information
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Mobile:</span>
                      <span className="font-semibold text-black">
                        585-330-3923
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Email:</span>
                      <span className="font-semibold text-black">
                        john@gmail.com
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-sm font-medium">Assigned To:</span>
                      <div className="flex justify-end gap-3">
                        <div>
                          <span>Lead Labor</span>
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            large
                            className=""
                            placeholder="Search to Select"
                            optionFilterProp="label"
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '')
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? '').toLowerCase()
                                )
                            }
                            options={[
                              {
                                value: '1',
                                label: 'Jack',
                              },
                              {
                                value: '2',
                                label: 'Liam',
                              },
                              {
                                value: '3',
                                label: 'Noah',
                              },
                              {
                                value: '4',
                                label: 'Lucas',
                              },
                              {
                                value: '5',
                                label: 'William',
                              },
                              {
                                value: '6',
                                label: 'Ethan',
                              },
                            ]}
                          />
                        </div>
                        <div>
                          <span>Labor</span>
                          <Select
                            showSearch
                            style={{ width: '100%' }}
                            large
                            className=""
                            placeholder="Search to Select"
                            optionFilterProp="label"
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '')
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? '').toLowerCase()
                                )
                            }
                            options={[
                              {
                                value: '1',
                                label: 'Cooper',
                              },
                              {
                                value: '2',
                                label: 'Hudson',
                              },
                              {
                                value: '3',
                                label: 'Archie',
                              },
                              {
                                value: '4',
                                label: 'Mason',
                              },
                              {
                                value: '5',
                                label: 'Hunter',
                              },
                              {
                                value: '6',
                                label: 'Xavier',
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </p>
                    <p className="flex justify-between">
                      <span>Invoice Status:</span>
                      <span className="rounded-full border-[1.5px] p-1 px-2 font-semibold text-yellow-500">
                        Pending
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Job Information
                  </h2>
                </div>
                <div>
                  <div className="text-gray-600">
                    <p className="flex items-center justify-end gap-3">
                      <span className="text-sm font-semibold">Job ID:</span>
                      <span class="text-sm font-medium">5769 Sunnybrook</span>
                    </p>
                    <p className="flex items-center justify-end gap-3">
                      <span className="text-sm font-semibold">
                        Customer Name:
                      </span>
                      <span class="text-sm font-medium">Richard </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Button Section */}
        </div>

        {/* Table Section */}
        <div className="rounded-lg bg-white md:p-4 p-2 shadow-md">
          {/* Tab Navigation */}
          <div className="mb-4 border-b border-gray-300">
            <ul className="flex space-x-8 overflow-y-auto">
              <li
                className={`cursor-pointer px-4 py-2 ${
                  activeTab === 'transactions'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => showTab('transactions')}
              >
                Transactions
              </li>

              <li
                className={`cursor-pointer px-4 py-2 ${
                  activeTab === 'notes'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => showTab('notes')}
              >
                Notes
              </li>
              <li
                className={`cursor-pointer px-4 py-2 ${
                  activeTab === 'sentEmail'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => showTab('sentEmail')}
              >
                Sent Email
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className={activeTab === 'transactions' ? '' : 'hidden'}>
            {/* Transactions Tab Content */}
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead className="">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Title
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Num
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Account
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Memo
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      P.O Number
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Open Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.title}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.type}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.num}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.date}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.account}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.memo}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.poNumber}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        {item.openBalance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={activeTab === 'contacts' ? '' : 'hidden'}>
            <p className="text-center text-gray-700">Contacts Data</p>
            {/* Add your content for the Contacts tab */}
          </div>

          <div className={activeTab === 'notes' ? '' : 'hidden'}>
            <form onSubmit={noteData}>
              <textarea
                onChange={(e)=>setTextAreaData(e.target.value)}
               value={textAreaData}
               
                rows={6}
                className="h-full w-full rounded-lg border border-gray-300 py-2 pr-4 pl-3 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter Your Messages"
              />
              <Button
                uibutton="Verify"
                ButtonUi="rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600 w-fit my-2"
                PositionBtn="justify-end"
              />
            </form>
          </div>

          <div className={activeTab === 'sentEmail' ? '' : 'hidden'}>
            <p className="text-center text-gray-700">Sent Emails Data</p>
            {/* Add your content for the Sent Email tab */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Job Selection Form Component
const JobSelectionForm = () => {
  const [step, setStep] = useState(1);
  const [jobType, setJobType] = useState([]);
  const [value, setValue] = useState(''); // Set default selected value
  const [size, setSize] = useState('large');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleJobTypeChange = (newValue) => {
    setJobType(newValue); // Update selected job types
  };

  return (
    <>
      <Stepper currentStep={step} />

      <div
        className={`mx-auto ${step === 1 ? 'max-w-2xl bg-white shadow-lg p-6' : step === 2 ? 'max-w-5xl bg-white shadow-lg p-6' : step === 3 ? 'container mx-auto space-y-6' : ''} rounded-lg `}
      >
        {step === 1 && (
          <Step1
            jobType={jobType}
            handleJobTypeChange={handleJobTypeChange}
            setValue={setValue}
            value={value}
          />
        )}

        {step === 2 &&  <Step2 size={size} value={value}/>}

        {step === 3 && <Step3 />}

        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="rounded-full border-[1.5px] px-6 py-2 text-gray-700 disabled:bg-gray-200"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={step === 1 && jobType.length === 0}
            className="rounded-full bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default JobSelectionForm;
