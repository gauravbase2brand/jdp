"use client"
import React, { useState } from 'react'
import StaffCreationFormPersonalDetails from './StaffCreationFormPersonalDetails'
import StaffCreationFormAddressContact from './StaffCreationFormAddressContact';
import StaffCreationFormEmploymentInfo from './StaffCreationFormEmploymentInfo';
import Button from '../ui/Button';

const StaffCreationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { title: 'Personal Details', component: StaffCreationFormPersonalDetails },
    { title: 'Address & Contact', component: StaffCreationFormAddressContact },
    { title: 'Employment Info', component: StaffCreationFormEmploymentInfo }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
  <>

    <div className="min-h-screen  py-8">
      <div className='mb-3'>
      <h1 className="text-2xl font-bold text-center  m-auto w-fit border-b-2 border-blue-500">Staff Creation Form</h1>

      </div>
      <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-sm md:p-6 p-3  ">
        {/* Progress Bar */}
        {/* <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  index <= currentStep 
                    ? 'bg-blue-500 border-blue-500 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  index <= currentStep ? 'text-blue-500' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    index < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* Current Step Component */}
        <div className="">
          
          <CurrentStepComponent />
        </div>

        {/* Navigation Buttons */}
        <div className={`flex  mt-3 ${currentStep === 0 ? 'justify-end' : 'justify-between'}`}>
       {currentStep > 0 && (
        <Button
            uibutton="Back"
            ButtonUi={`px-6 py-2 text-sm rounded-full ${
              currentStep === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
            PositionBtn="justify-start"
            onClick={prevStep}
            disabled={currentStep === 0}
          />
       )}
          
          <Button
            uibutton={currentStep === steps.length - 1 ? "Submit" : "Next"}
            ButtonUi={`px-6 py-2 text-sm rounded-full ${
              currentStep === steps.length - 1 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            PositionBtn="justify-end"
            onClick={nextStep}
          />
        </div>
      </div>
    </div>
  </>
  )
}

export default StaffCreationForm