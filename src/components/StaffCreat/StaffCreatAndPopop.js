'use client';
import React, { useState } from 'react';
import CreateUserData from '@/components/StaffCreat/CreateUserData';
import StaffCreationForm from '../forms/StaffCreationForm';

const StaffCreatAndPopop = () => {
  const [open, setOpen] = useState(true);
  const onClick = () => {
    console.log('createNewJobs');
    setOpen(false);
  };
  return (
    <div>
      {open ? <CreateUserData onClick={onClick} /> : <StaffCreationForm />}
      {/* <StaffCreationForm/> */}
    </div>
    
  );
};

export default StaffCreatAndPopop;
