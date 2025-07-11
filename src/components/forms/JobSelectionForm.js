import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';

import ContractBasedJob from './ContractBasedJob';
import ServiceBasedJob from './ServiceBasedJob';
import JobsInvoice from './JobsInvoice';
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
      <div className="relative m-auto mb-4 flex w-1/2 items-center justify-between overflow-hidden md:mb-6 md:w-1/3">
        {/* Stepper Circles */}
        {[1, 2, 3].map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full md:h-12 md:w-12 ${currentStep >= step ? 'bg-primary text-white' : 'bg-gray-300'}`}
            >
              {step}
            </div>

            {/* Line Between Circles */}
            {index < 2 && (
              <div
                className={`absolute h-[2px] w-[100%] ${currentStep >= step + 1 ? 'bg-primary' : 'bg-gray-300'} mx-2`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const Step1 = ({ jobType, handleJobTypeChange, setValue, value }) => {
  console.log('valur>>>', value);
const placeholderData = "Select job type"
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
          maxTagCount={MAX_COUNT}
           value={value || undefined}
          style={{ width: '80%', borderRadius: '!important 30px' }}
          className="m-auto"
          size="large"
          onChange={handleValueChange}
          suffixIcon={suffix}
          placeholder={placeholderData}
          options={[
            { value: 'ServiceBased', label: 'Service Based' },
            { value: 'ContractBased', label: 'Contract Based' },
          ]}
        />
      </div>
    </div>
  );
};

const JobSelectionForm = ({}) => {
  const [step, setStep] = useState(1);
  const [jobType, setJobType] = useState([]);
  const [value, setValue] = useState('');

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setValue('');
    }
  };

  const handleJobTypeChange = (newValue) => {
    setJobType(newValue);
  };

  return (
    <>
      <Stepper currentStep={step} />

      <div
        className={`mx-auto ${step === 1 ? 'max-w-2xl bg-white p-6 shadow-lg' : step === 2 ? 'max-w-5xl bg-white p-6 shadow-lg' : step === 3 ? 'container mx-auto space-y-6' : ''} rounded-lg`}
      >
        {step === 1 && (
          <Step1
            jobType={jobType}
            handleJobTypeChange={handleJobTypeChange}
            setValue={setValue}
            value={value}
          />
        )}

        {step === 2 &&
          (value === 'ServiceBased' ? (
            <ServiceBasedJob />
          ) : (
            <ContractBasedJob />
          ))}

        {step === 3 && <JobsInvoice step={step} setStep={setStep}/>}





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
