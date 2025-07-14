import React from 'react'
import StaffCreationFormPersonalDetails from './StaffCreationFormPersonalDetails'
import StaffCreationFormAddressContact from './StaffCreationFormAddressContact';
import StaffCreationFormEmploymentInfo from './StaffCreationFormEmploymentInfo';

const StaffCreationForm = () => {
  return (
    <div>

      <StaffCreationFormPersonalDetails />
      <StaffCreationFormAddressContact />
      <StaffCreationFormEmploymentInfo/>
    </div>
  )
}

export default StaffCreationForm