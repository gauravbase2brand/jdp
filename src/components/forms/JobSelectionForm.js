import { SiGooglemaps } from 'react-icons/si';
import { DatePicker, Space } from 'antd';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Input from '../ui/InputFiels';
import InputCustom from '../ui/InputFiels';
import { Radio } from 'antd';
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
      <div className="relative m-auto mb-8 flex w-1/2 items-center justify-between overflow-hidden">
        {/* Stepper Circles */}
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`relative z-10 flex h-18 w-18 items-center justify-center rounded-full ${currentStep >= step ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
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
const Step1 = ({ jobType, handleJobTypeChange }) => {
  const [value, setValue] = useState([]); // Set default selected value

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

      <Select
        mode="multiple"
        maxTagCount={MAX_COUNT} // Limit the number of selected items
        value={value}
        style={{ width: '100%' }}
        classNames=""
        onChange={handleValueChange}
        suffixIcon={suffix} // Show selected count in suffix
        placeholder="Select job type"
        options={[
          { value: 'ServiceBased', label: 'Servic Based' },
          { value: 'ContractBased', label: 'Contract Based' },
        ]}
      />
    </div>
  );
};

// Step 2: Job Details
const Step2 = () => {
  const { RangePicker } = DatePicker;
  const [size, setSize] = useState('large');
  return (
    <div className="mt-8">
      <h3 className="text-center text-xl font-semibold">Job Details</h3>
      <p className="mt-2 mb-4 text-gray-500">
        Please provide the details of your job. This helps us understand the
        task better and ensure accurate handling.
      </p>
      <form>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Select Contractor <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-12"
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
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
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
            <span className="mb-2 block text-sm font-medium text-gray-700">
              Billing Status <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-12 placeholder-amber-200"
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
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
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
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Job Description <spam className="text-red-500">*</spam>
              </span>
              <textarea
                className="h-full w-full rounded-lg border border-gray-300 py-2 pr-4 pl-3 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter message"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <span className="mb-2 block text-sm font-medium text-gray-700">
                  Warranty <spam className="text-red-500">*</spam>
                </span>
                <Radio.Group
                  name="radiogroup"
                  defaultValue={2}
                  options={[
                    { value: 1, label: 'Yes', style: { fontSize: '1rem' } },
                    { value: 2, label: 'No', style: { fontSize: '1rem' } },
                  ]}
                />
              </div>

              <div>
                {' '}
                <RangePicker size={size}></RangePicker>
              </div>
              <div>
                <span className="mb-2 block text-sm font-medium text-gray-700">
                  Job Completion Status <spam className="text-red-500">*</spam>
                </span>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  large
                  className="!h-12"
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
                      label: 'Not Identified',
                    },
                    {
                      value: '2',
                      label: 'Closed',
                    },
                    {
                      value: '3',
                      label: 'Communicated',
                    },
                    {
                      value: '4',
                      label: 'Identified',
                    },
                    {
                      value: '5',
                      label: 'Resolved',
                    },
                    {
                      value: '6',
                      label: 'Cancelled',
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

  // Function to change active tab
  const showTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="mt-8">
      <div className="container mx-auto p-4">
        {/* Job Information Section */}
        <div className="mb-3 rounded-3xl bg-white p-6">
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
                  <span className="text-sm font-medium">Customer Name:</span>
                  <span className="font-semibold text-black">
                    SERVICE CALLS
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-sm font-medium">Job Status:</span>
                  <span className="font-semibold text-black">None</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-sm font-medium">Bill To:</span>
                  <span className="font-semibold text-black">Mag Outman</span>
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
                  <span className="font-semibold text-black">585-330-3923</span>
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
                            .localeCompare((optionB?.label ?? '').toLowerCase())
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
                            .localeCompare((optionB?.label ?? '').toLowerCase())
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

          {/* Button Section */}
        </div>

        {/* Table Section */}
        <div className="rounded-lg bg-white p-4 shadow-md">
          {/* Tab Navigation */}
          <div className="mb-4 border-b border-gray-300">
            <ul className="flex space-x-8">
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
                  activeTab === 'todos'
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => showTab('todos')}
              >
                To Do s
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
                <thead className="bg-gray-100">
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
                  <tr className="hover:bg-gray-100">
                    <td className="px-4 py-2 text-sm text-gray-700 text-primary">XYZ</td>
                    <td className="px-4 py-2 text-sm text-gray-700">Invoice</td>
                    <td className="px-4 py-2 text-sm text-gray-700">9472</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      04/06/2025
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      1200 Accounts....
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Accounts Details...
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      P.O Details...
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      1,355.78
                    </td>
                  </tr>
                  {/* Repeat for more rows */}
                </tbody>
              </table>
            </div>
          </div>

          <div className={activeTab === 'contacts' ? '' : 'hidden'}>
            <p className="text-center text-gray-700">Contacts Data</p>
            {/* Add your content for the Contacts tab */}
          </div>

          <div className={activeTab === 'todos' ? '' : 'hidden'}>
            <p className="text-center text-gray-700">To Do s Data</p>
            {/* Add your content for the To Do's tab */}
          </div>

          <div className={activeTab === 'notes' ? '' : 'hidden'}>
            <p className="text-center text-gray-700">Notes Data</p>
            {/* Add your content for the Notes tab */}
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
        className={`mx-auto ${step === 1 ? 'max-w-4xl bg-white shadow-lg' : step === 2 ? 'max-w-5xl bg-white shadow-lg' : step === 3 ? 'container mx-auto space-y-6' : ''} rounded-lg p-6`}
      >
        {step === 1 && (
          <Step1 jobType={jobType} handleJobTypeChange={handleJobTypeChange} />
        )}

        {step === 2 && <Step2 />}

        {step === 3 && <Step3 />}

        <div className="mt-10 flex justify-between">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="rounded-lg bg-gray-300 px-6 py-2 text-gray-700 hover:bg-gray-400 disabled:bg-gray-200"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={step === 1 && jobType.length === 0}
            className="rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default JobSelectionForm;
