

import Welcome from '@/components/layout/Welcome';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/InputFiels';
import React from 'react';
import { CiMail } from 'react-icons/ci';

const LoginMain = () => {
  return (
    <div className="grid h-screen grid-cols-1 items-center justify-center bg-gray-100 md:grid-cols-[2fr_3fr]">
      <Welcome
        welcome="Welcome to JDP"
        StartingTxt=" Joined forces in 2012 to form JDP Electrical Services bringing together 90 years
          of outstanding electrical experience. Their dedication to providing custom work has
          earned them an outstanding reputation in the construction community."
      />
      <div className="m-auto w-full max-w-lg space-y-6 p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Sign in</h2>
        <p className="mb-6 text-sm text-gray-600">
          {' '}
          Verify your email or phone to continue setting up securely.
        </p>
        <form className="space-y-4">
          <Input placeholder="Enter your email/ phone number"
            InputLabl=" Email/Phone Number"
            isRequiredLabel={true}
            InputType="text"
            icon={<CiMail size={20} />}
          />
          <Button
            uibutton="Verify"
            ButtonUi="rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600 w-full my-2"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginMain;
