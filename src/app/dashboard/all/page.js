import React from 'react'
import CreateUserData from './../../../components/StaffCreat/CreateUserData';

const page = () => {
  const onClick = () => {
    console.log("createNewJobs")
  }
  return (
    <div><CreateUserData/></div>
  )
}

export default page