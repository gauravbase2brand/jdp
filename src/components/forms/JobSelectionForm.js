import { SiGooglemaps } from 'react-icons/si';

import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Input from '../ui/InputFiels';
import InputCustom from '../ui/InputFiels';

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
      <div className="mb-8 flex items-center justify-between">
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
                className={`absolute h-[2px] w-[17%] ${currentStep >= step + 1 ? 'bg-blue-500' : 'bg-gray-300'} mx-2`}
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
          <div className="mt-3">
            <div>
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Job Description <spam className="text-red-500">*</spam>
              </span>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-6 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Describe the job details here..."
              ></textarea>
            </div>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Step 3: Confirmation
const Step3 = () => {
  return (
    <div className="mt-8">
      <h3 className="text-center text-xl font-semibold">Confirmation</h3>
      <p className="mt-2 mb-4 text-gray-500">
        Please review the details and confirm that everything is correct before
        proceeding.
      </p>
      <div className="mb-6 w-full rounded-lg border border-gray-300 p-3">
        <p className="text-gray-500">Job Type: Full-Time</p>
        <p className="text-gray-500">
          Job Description: Sample description for the job.
        </p>
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
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <Stepper currentStep={step} />

      {step === 1 && (
        <Step1 jobType={jobType} handleJobTypeChange={handleJobTypeChange} />
      )}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      <div className="mt-6 flex justify-between">
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
  );
};

export default JobSelectionForm;
