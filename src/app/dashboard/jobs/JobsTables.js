'use client';

import JobSelectionForm from '@/components/forms/JobSelectionForm';
import ExpandableSearch from '@/components/ui/SearchJobs';
import SelectOptionAnt from '@/components/ui/SelectOptionAnt';
import { Tooltip } from 'antd';


import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { FiPlusCircle } from 'react-icons/fi';

import ShortByPrice from '@/components/ui/ShortByPrice';
const JobsTables = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [jobPopop, setjobPopop] = useState(true);
  const [openTool, setOpenTool] = useState(null); // Use null to indicate no dropdown is open
  const dropdownRef = useRef(null); // Ref to detect clicks outside of dropdown
  const [activetab,setactivetab]= useState('All')
  const handleOpen = (id) => {
    setOpenTool(openTool === id ? null : id); // Toggle dropdown based on user id
  };

  useEffect(() => {
    // Event listener to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenTool(null); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside); // Add event listener

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up event listener
    };
  }, []);

  const users = [
    {
      id: 0,
      JobID: 'John Smith',
      Job_Type: 'Contract',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Paid',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
    {
      id: 1,
      JobID: 'David Smith',
      Job_Type: 'Contract',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Paid',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
    {
      id: 2,
      JobID: 'Olivia',
      Job_Type: 'Service',
      AssignedTo: 'Labor_1',
      Date_Assigned: '24-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Paid',
      Billing_Status: 'Billable',
      CompletedTask: 'Completed',
    },
    {
      id: 3,
      JobID: 'Allen',
      Job_Type: 'Service',
      AssignedTo: 'Labor_1',
      Date_Assigned: '23-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Paid',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
    {
      id: 4,
      JobID: 'Benz',
      Job_Type: 'Service',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2024',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Sent',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
    {
      id: 5,
      JobID: 'Mark',
      Job_Type: 'Service',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Sent',
      Billing_Status: 'Billable',
      CompletedTask: 'Completed',
    },
    {
      id: 6,
      JobID: 'Faddy',
      Job_Type: 'Labor',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Sent',
      Billing_Status: 'Billable',
      CompletedTask: 'Completed',
    },
    {
      id: 7,
      JobID: 'Samuel',
      Job_Type: 'Service',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Sent',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
  ];

  const getStatusClass = (CompletedTask) => {
    switch (CompletedTask) {
      case 'Assigned':
        return 'text-blue-500 font-medium  ';
      case 'In Progress':
        return 'text-yellow-500 font-medium';
      case 'Completed':
        return 'text-green-500 font-medium';
      case 'Delayed':
        return 'text-orange-500 font-medium ';
      default:
        return '';
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(users.map((user) => user.name));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (e, userName) => {
    if (e.target.checked) {
      setSelectedUsers([...selectedUsers, userName]);
    } else {
      setSelectedUsers(selectedUsers.filter((user) => user !== userName));
    }
  };
  const newJobTooltip = 'Create a brand-new job record';
  const createNewJobs = () => {
    setjobPopop(false);
  };
const handleClick =(tabname)=>{
  setactivetab(tabname)
  console.log("tab",tabname);
  

}


  return (
    <>
      {jobPopop ? (
        <>
          <div className="mb-3 grid grid-cols-1">
            <div className="">
              <div className="flex flex-wrap items-center justify-center gap-3 md:justify-between">
                <div className="flex justify-between gap-3 flex-wrap">
                  <Tooltip
                    title={newJobTooltip} 
                    placement="topLeft"
                    arrow
                    className="cursor-pointer"
                  >
                    <button
                      className="bg-primary flex items-center gap-2 rounded-full px-4 py-2 text-white hover:opacity-90"
                      onClick={createNewJobs}
                    >
                      <FiPlusCircle size={20} />
                      <span className="font-semibold">New Job</span>
                    </button>
                  </Tooltip>

                  <ExpandableSearch />
                </div>
                <div className="mb-2 grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-1 w-full lg:w-auto items-center">
                  <SelectOptionAnt FilterInpur="Job Type" />
                  <SelectOptionAnt FilterInpur="Completion Status" />
                  
              
                  <ShortByPrice />

                </div>
              </div>
             <div>
               <div className="mt-3 flex flex-wrap justify-center justify-items-start gap-3 md:justify-start md:gap-10">
                <button className={`flex items-center gap-2 rounded-full  p-1 px-4 transition-transform duration-300 ease-in-out hover:scale-110 ${activetab ===  'All' ? 'bg-[#00a1ff45]':''}`} onClick={()=> handleClick('All')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="30"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M4.49989 0.000244141H2.24994C1.00925 0.000244141 0 1.00949 0 2.25019V4.50013C0 5.74082 1.00925 6.75007 2.24994 6.75007H4.49989C5.74058 6.75007 6.74983 5.74082 6.74983 4.50013V2.25019C6.74983 1.00949 5.74058 0.000244141 4.49989 0.000244141ZM5.24987 4.50013C5.24987 4.91357 4.91369 5.25011 4.49989 5.25011H2.24994C1.83614 5.25011 1.49996 4.91357 1.49996 4.50013V2.25019C1.49996 1.83674 1.83614 1.50021 2.24994 1.50021H4.49989C4.91369 1.50021 5.24987 1.83674 5.24987 2.25019V4.50013Z"
                      fill={activetab === 'All'? '#00A1FF':"#111827"}
                    />
                    <path
                      d="M12.7499 0.000244141H10.4999C9.25925 0.000244141 8.25 1.00949 8.25 2.25019V4.50013C8.25 5.74082 9.25925 6.75007 10.4999 6.75007H12.7499C13.9906 6.75007 14.9998 5.74082 14.9998 4.50013V2.25019C14.9998 1.00949 13.9906 0.000244141 12.7499 0.000244141ZM13.4999 4.50013C13.4999 4.91357 13.1637 5.25011 12.7499 5.25011H10.4999C10.0861 5.25011 9.74996 4.91357 9.74996 4.50013V2.25019C9.74996 1.83674 10.0861 1.50021 10.4999 1.50021H12.7499C13.1637 1.50021 13.4999 1.83674 13.4999 2.25019V4.50013Z"
                  fill={activetab === 'All'? '#00A1FF':"#111827"}
                    />
                    <path
                      d="M4.49989 8.25H2.24994C1.00925 8.25 0 9.25925 0 10.4999V12.7499C0 13.9906 1.00925 14.9998 2.24994 14.9998H4.49989C5.74058 14.9998 6.74983 13.9906 6.74983 12.7499V10.4999C6.74983 9.25925 5.74058 8.25 4.49989 8.25ZM5.24987 12.7499C5.24987 13.1633 4.91369 13.4999 4.49989 13.4999H2.24994C1.83614 13.4999 1.49996 13.1633 1.49996 12.7499V10.4999C1.49996 10.0865 1.83614 9.74996 2.24994 9.74996H4.49989C4.91369 9.74996 5.24987 10.0865 5.24987 10.4999V12.7499Z"
                   fill={activetab === 'All'? '#00A1FF':"#111827"}
                    />
                    <path
                      d="M12.7499 8.25H10.4999C9.25925 8.25 8.25 9.25925 8.25 10.4999V12.7499C8.25 13.9906 9.25925 14.9998 10.4999 14.9998H12.7499C13.9906 14.9998 14.9998 13.9906 14.9998 12.7499V10.4999C14.9998 9.25925 13.9906 8.25 12.7499 8.25ZM13.4999 12.7499C13.4999 13.1633 13.1637 13.4999 12.7499 13.4999H10.4999C10.0861 13.4999 9.74996 13.1633 9.74996 12.7499V10.4999C9.74996 10.0865 10.0861 9.74996 10.4999 9.74996H12.7499C13.1637 9.74996 13.4999 10.0865 13.4999 10.4999V12.7499Z"
                      fill={activetab === 'All'? '#00A1FF':"#111827"}
                    />
                  </svg>
                  <span className={` text-sm  font-medium ${activetab ===  'All' ? 'text-primary':' text-[#111827]'}`}>All</span>
                </button>
                <button className={`flex items-center gap-2 rounded-full p-1 px-4 transition-transform duration-300 ease-in-out hover:scale-110 ${activetab === 'Service Based' ? 'bg-[#00a1ff45]':'' }`} onClick={()=> handleClick('Service Based')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M18.6609 7.62217H18.3509C18.1676 6.97847 17.9115 6.36088 17.5861 5.77698L17.8065 5.55654C18.0586 5.30449 18.1974 4.96834 18.1974 4.60996C18.1974 4.25158 18.0586 3.91548 17.8063 3.66314L16.3379 2.19646C16.0857 1.94274 15.7491 1.80307 15.3901 1.80307C15.0311 1.80307 14.6945 1.94274 14.4436 2.19521L14.2234 2.41535C13.6391 2.08887 13.0213 1.83235 12.378 1.64912V1.33913C12.3781 0.600746 11.7774 0 11.0389 0H8.96285C8.22447 0 7.62372 0.600746 7.62372 1.33913V1.64912C6.98056 1.83229 6.36237 2.08887 5.77686 2.41559L5.55773 2.19646C5.30545 1.94274 4.96888 1.80307 4.6099 1.80313C4.25092 1.80313 3.91434 1.94286 3.66344 2.19527L2.19533 3.66344C1.94316 3.91548 1.80439 4.25164 1.80439 4.61002C1.80439 4.9684 1.94316 5.30449 2.19527 5.55654L2.41559 5.77692C2.08875 6.36261 1.83258 6.98032 1.65032 7.62217H1.33913C0.600746 7.62217 0 8.22291 0 8.9613V11.0392C0 11.7776 0.600746 12.3783 1.33913 12.3783H1.65032C1.83258 13.0201 2.08875 13.6378 2.41559 14.2236L2.19527 14.4439C1.9431 14.696 1.80433 15.0321 1.80433 15.3905C1.80433 15.7488 1.9431 16.085 2.19521 16.337L3.66218 17.804C3.91434 18.0577 4.25086 18.1974 4.60984 18.1974H4.6099C4.96888 18.1974 5.30551 18.0577 5.55648 17.8053L5.7768 17.5849C6.36291 17.9119 6.9811 18.1681 7.62366 18.3503V18.6614C7.62366 19.3998 8.22441 20.0005 8.96279 20.0005H11.0389C11.7773 20.0005 12.378 19.3998 12.378 18.6614V18.3503C13.0208 18.1681 13.6385 17.912 14.2234 17.5851L14.4423 17.804C14.6945 18.0577 15.0311 18.1974 15.39 18.1974C15.7491 18.1974 16.0857 18.0577 16.3364 17.8055L17.8065 16.337C18.0586 16.0849 18.1973 15.7488 18.1973 15.3905C18.1973 15.0321 18.0586 14.696 17.8065 14.4439L17.586 14.2235C17.9115 13.6396 18.1675 13.022 18.3508 12.3783H18.6609C19.3993 12.3783 20 11.7776 20 11.0392V8.9613C20.0001 8.22291 19.3994 7.62217 18.6609 7.62217ZM11.1833 18.6613C11.1833 18.7396 11.1172 18.8057 11.0389 18.8057H8.96285C8.88459 18.8057 8.81852 18.7396 8.81852 18.6613V17.8857V14.1196C8.81852 13.8697 8.66308 13.6463 8.4289 13.5594C6.82356 12.9641 5.74502 11.4191 5.74502 9.71492C5.74502 8.36438 6.41751 7.09837 7.54361 6.32862C7.59415 6.29409 7.63884 6.26589 7.67791 6.24277C7.67576 6.32043 7.67026 6.39427 7.66733 6.4328C7.66285 6.49344 7.65927 6.54129 7.65927 6.58879V9.40833C7.65927 10.7025 8.67049 11.7833 9.96129 11.8689C9.98763 11.8706 10.014 11.8706 10.0404 11.8689C11.3303 11.7834 12.3407 10.7025 12.3407 9.40833V6.58879C12.3407 6.54153 12.3372 6.49398 12.3328 6.4337C12.3299 6.39499 12.3244 6.32073 12.3223 6.24271C12.3613 6.26577 12.4057 6.29391 12.4561 6.32838C13.5825 7.09831 14.255 8.36432 14.255 9.71486C14.255 11.4188 13.177 12.9639 11.5727 13.5594C11.3385 13.6463 11.1832 13.8697 11.1832 14.1195V17.8857V18.6613H11.1833ZM18.8053 11.0392C18.8053 11.1161 18.7378 11.1835 18.6609 11.1835H17.8871C17.608 11.1835 17.366 11.3768 17.3044 11.649C17.1152 12.4849 16.7875 13.2754 16.3305 13.9985C16.1812 14.2346 16.2155 14.5426 16.413 14.7401L16.9617 15.2888C16.9973 15.3244 17.0027 15.3678 17.0027 15.3905C17.0027 15.4131 16.9973 15.4565 16.9619 15.4919L15.4906 16.9616C15.457 16.9954 15.4173 17.0025 15.3901 17.0025C15.3629 17.0025 15.3234 16.9954 15.2885 16.9603L14.7398 16.4116C14.542 16.2139 14.2337 16.1798 13.9976 16.3294C13.4876 16.6525 12.9448 16.9089 12.3781 17.0984V14.5169C14.2314 13.6544 15.4499 11.7748 15.4499 9.7148C15.4499 7.96938 14.5828 6.33465 13.1305 5.34195C12.908 5.18991 12.2315 4.72735 11.6397 5.06792C11.0587 5.40247 11.1166 6.18668 11.1413 6.52158C11.1434 6.55067 11.1455 6.5751 11.146 6.58879V9.40833C11.146 10.0622 10.6462 10.6105 10.0009 10.6735C9.35469 10.6104 8.85413 10.0622 8.85413 9.40833L8.85407 6.59309C8.8546 6.5751 8.85676 6.55067 8.85891 6.52146C8.88382 6.18674 8.94218 5.40295 8.36163 5.06822C7.77014 4.72705 7.09257 5.18979 6.86968 5.34195C5.41728 6.33471 4.55022 7.96944 4.55022 9.71486C4.55022 11.7751 5.76933 13.6548 7.62372 14.5171V17.0985C7.05685 16.909 6.51339 16.6525 6.00196 16.3292C5.90363 16.267 5.79299 16.2367 5.68289 16.2367C5.52858 16.2367 5.37553 16.2964 5.26029 16.4117L4.71044 16.9616C4.67681 16.9955 4.6372 17.0026 4.60996 17.0026C4.58272 17.0026 4.54323 16.9955 4.50834 16.9604L3.04017 15.4922C3.0045 15.4566 2.99919 15.4132 2.99919 15.3905C2.99919 15.3678 3.0045 15.3244 3.04017 15.2888L3.58882 14.7401C3.78632 14.5426 3.82061 14.2346 3.67138 13.9985C3.21198 13.2716 2.88437 12.4815 2.69768 11.65C2.63651 11.3773 2.39432 11.1834 2.1148 11.1834H1.33925C1.26237 11.1834 1.19492 11.116 1.19492 11.0391V8.96124C1.19492 8.88298 1.26099 8.81691 1.33925 8.81691H2.1148C2.39432 8.81691 2.63645 8.62305 2.69768 8.35034C2.88437 7.51888 3.21192 6.7287 3.67138 6.0019C3.82061 5.76581 3.78632 5.45779 3.58882 5.26029L3.04011 4.71157C3.0045 4.67597 2.99919 4.6326 2.99919 4.6099C2.99919 4.5872 3.0045 4.54382 3.04017 4.50816L4.50959 3.03868C4.54323 3.00486 4.58278 2.99775 4.61002 2.99775C4.63726 2.99775 4.67681 3.00486 4.71169 3.03993L5.26035 3.58864C5.45797 3.7862 5.76599 3.82043 6.00202 3.6712C6.72792 3.21228 7.51894 2.88401 8.35285 2.69565C8.62526 2.63412 8.81864 2.39211 8.81864 2.11294V1.33913C8.81864 1.26087 8.88471 1.1948 8.96297 1.1948H11.0391C11.1173 1.1948 11.1834 1.26087 11.1834 1.33913V2.11306C11.1834 2.39229 11.3768 2.63424 11.6491 2.69577C12.4838 2.88431 13.2739 3.2124 13.9977 3.67102C14.2338 3.82061 14.5421 3.78656 14.7399 3.58882L15.2898 3.03885C15.3234 3.00504 15.363 2.99793 15.3902 2.99793C15.4175 2.99793 15.457 3.00504 15.4921 3.04035L16.9619 4.50834C16.9975 4.54394 17.0028 4.58732 17.0028 4.61002C17.0028 4.63272 16.9975 4.67609 16.9618 4.71175L16.4132 5.26047C16.2157 5.45797 16.1814 5.76599 16.3306 6.00208C16.7876 6.72511 17.1153 7.51553 17.3045 8.35153C17.3661 8.62377 17.6081 8.81703 17.8872 8.81703H18.661C18.7393 8.81703 18.8054 8.8831 18.8054 8.96136V11.0392H18.8053Z"
                      fill={activetab === 'Service Based' ? '#00A1FF' :'#111827'}
                    />
                  </svg>
                <span className={` text-sm font-medium  ${activetab ===  'Service Based' ? 'text-primary':' text-[#111827]'}`}>Service Based</span>
                </button>

                <button className={`flex items-center gap-2 rounded-full p-1 px-4 transition-transform duration-300 ease-in-out hover:scale-110 ${activetab === 'Contract Based' ? 'bg-[#00a1ff45]':'' } `} onClick={()=>handleClick('Contract Based')}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 27 27"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1377_1791)">
                      <path
                        d="M26.89 11.515L22.3709 5.64463C22.2037 5.42751 21.8986 5.37395 21.6673 5.52103L18.7496 7.37662H14.9443C14.895 7.37662 14.846 7.38713 14.7986 7.40093L11.8482 8.25024L8.78669 7.41288L5.81194 5.52103C5.58452 5.37642 5.285 5.42545 5.11588 5.63515L0.117447 11.8265C-0.0621796 12.049 -0.0325165 12.3738 0.184189 12.5602L2.80402 14.8148L5.1544 17.9822C4.467 18.7145 4.48039 19.8695 5.1956 20.5849C5.51263 20.9018 5.91576 21.0808 6.33042 21.1224C6.316 21.2163 6.30859 21.3117 6.30859 21.4085C6.30859 21.9082 6.50325 22.3781 6.85653 22.7314C7.21002 23.0849 7.67989 23.2795 8.17963 23.2795C8.18643 23.2795 8.19302 23.2791 8.19961 23.2789C8.1994 23.2917 8.19879 23.3043 8.19879 23.317C8.19879 23.8168 8.39345 24.2866 8.74673 24.6401C9.10021 24.9934 9.57009 25.1881 10.0698 25.1881C10.1685 25.1881 10.2661 25.18 10.3619 25.1652C10.4025 25.5813 10.5819 25.9863 10.9 26.3044C11.2646 26.6692 11.7437 26.8515 12.2229 26.8515C12.702 26.8515 13.1812 26.6692 13.546 26.3044L13.8321 26.0182L13.9522 26.115C14.3139 26.4654 14.7836 26.6405 15.2532 26.6405C15.7324 26.6405 16.2115 26.4582 16.5761 26.0934C16.9484 25.7212 17.1307 25.2299 17.1231 24.7411C17.6117 24.7485 18.1032 24.5664 18.4754 24.1944C18.8472 23.8223 19.0295 23.3315 19.0223 22.8428C19.5313 22.8509 20.0142 22.6554 20.3745 22.2951C20.7467 21.9229 20.929 21.4316 20.9214 20.9427C21.4104 20.9502 21.9015 20.7681 22.2737 20.3958C22.909 19.7606 22.9908 18.7786 22.5197 18.0537L24.2358 14.4595L26.8159 12.2393C27.0291 12.0558 27.0616 11.7377 26.89 11.515ZM5.64261 6.66821L7.78165 8.02839L3.12846 13.6973L1.2638 12.0924L5.64261 6.66821ZM5.94439 18.6875L6.58997 18.0419C6.60954 18.0224 6.63014 18.0038 6.65115 17.9865C6.77743 17.8835 6.93028 17.8222 7.09219 17.8075C7.09672 17.8071 7.10146 17.8071 7.10599 17.8069C7.12906 17.8051 7.15213 17.8038 7.17541 17.804C7.39665 17.8071 7.60223 17.8975 7.75466 18.0584C8.05377 18.3746 8.0377 18.8913 7.71882 19.2101L7.09281 19.8362C6.77619 20.1528 6.261 20.1528 5.94439 19.8362C5.62778 19.5193 5.62778 19.0041 5.94439 18.6875ZM7.60532 21.9826C7.45185 21.8293 7.36739 21.6254 7.36739 21.4085C7.36739 21.1916 7.45185 20.9877 7.60532 20.8342L8.85714 19.5824C9.09692 19.3426 9.47389 19.2769 9.78041 19.4229C10.0964 19.5735 10.2742 19.9165 10.2278 20.2615C10.2031 20.4457 10.1174 20.6191 9.98599 20.7508L8.75394 21.9826C8.60047 22.1361 8.39654 22.2205 8.17963 22.2205C7.96272 22.2205 7.75878 22.1361 7.60532 21.9826ZM9.49552 23.8911C9.34205 23.7379 9.25759 23.5339 9.25759 23.317C9.25759 23.1001 9.34205 22.8962 9.49552 22.7427L10.7471 21.4909C11.0036 21.2346 11.415 21.1794 11.7289 21.3622C12.0156 21.529 12.1658 21.8565 12.1166 22.1828C12.0896 22.3623 12.0043 22.531 11.876 22.6593L10.6441 23.8911C10.4907 24.0446 10.2867 24.1291 10.0698 24.1291C9.85291 24.1291 9.64898 24.0446 9.49552 23.8911ZM11.6486 25.5556C11.332 25.239 11.332 24.7238 11.6486 24.4072L12.2941 23.7616C12.3137 23.742 12.3341 23.7237 12.3551 23.7064C12.3557 23.7059 12.3562 23.7055 12.3566 23.7051C12.4616 23.6198 12.585 23.5628 12.7166 23.5379C12.7197 23.5374 12.7228 23.537 12.7259 23.5366C12.7486 23.5325 12.7716 23.5292 12.7947 23.5271C12.804 23.5263 12.8133 23.5263 12.8227 23.5257C12.8417 23.5247 12.8604 23.5234 12.8796 23.5236C13.1006 23.5267 13.3064 23.617 13.4588 23.778C13.4776 23.7978 13.4951 23.8184 13.5112 23.8396C13.7546 24.1579 13.7219 24.6307 13.4197 24.9331L12.797 25.5558C12.4804 25.8724 11.9652 25.8722 11.6486 25.5556ZM21.5249 19.647C21.2083 19.9639 20.6931 19.9637 20.3765 19.647C20.365 19.6355 20.3528 19.6248 20.3405 19.6147L16.9362 16.1746C16.7304 15.9668 16.3953 15.9651 16.1874 16.1709C15.9796 16.3765 15.9779 16.7116 16.1835 16.9195L19.6246 20.3965C19.625 20.3969 19.6255 20.3973 19.6259 20.3977C19.9425 20.7143 19.9425 21.2297 19.6259 21.5463C19.4724 21.6998 19.2685 21.7842 19.0516 21.7842C18.8344 21.7842 18.6305 21.6998 18.4773 21.5463L16.1753 19.2204C15.9697 19.0126 15.6345 19.0109 15.4267 19.2165C15.2188 19.4223 15.2172 19.7575 15.4228 19.9653L17.6895 22.2555C17.7011 22.27 17.7134 22.2838 17.7266 22.297C18.0432 22.6136 18.0432 23.129 17.7266 23.4456C17.4098 23.7622 16.8944 23.762 16.5778 23.4454L15.3214 22.1758C15.1156 21.968 14.7805 21.9661 14.5726 22.1719C14.3648 22.3775 14.3631 22.7126 14.5687 22.9205L15.7901 24.1544C15.8016 24.1688 15.814 24.1828 15.8274 24.196C16.144 24.5126 16.144 25.028 15.8274 25.3446C15.5107 25.6614 14.9955 25.6612 14.6789 25.3446C14.6425 25.3082 14.5996 25.2802 14.5588 25.2488C14.5242 25.2225 14.5152 25.2041 14.5325 25.1621C14.55 25.1195 14.5761 25.081 14.5937 25.0381C14.613 24.9903 14.6287 24.9411 14.6439 24.8916C14.7251 24.63 14.749 24.3486 14.7125 24.0772C14.6425 23.5562 14.3559 23.0861 13.9217 22.7887C13.6871 22.6282 13.4156 22.5229 13.1342 22.4834C13.2706 21.8819 13.1068 21.2297 12.6808 20.7796C12.3302 20.4092 11.8566 20.2014 11.3472 20.1944C11.3287 20.1942 11.3101 20.1942 11.2914 20.1944C11.3027 19.7082 11.126 19.2252 10.7908 18.8711C10.44 18.5007 9.96642 18.2928 9.4572 18.2858C9.3058 18.2838 9.15295 18.2999 9.00546 18.3338C8.94242 17.8953 8.72139 17.4895 8.38665 17.1992C8.05397 16.9112 7.6356 16.7514 7.19003 16.7452C6.72099 16.7384 6.26018 16.9115 5.91184 17.226L3.8653 14.4684L8.76135 8.50361L10.3218 8.93043L8.28386 12.5265C8.03749 12.9613 7.97528 13.466 8.10856 13.9476C8.24184 14.4294 8.55454 14.8303 8.98939 15.0767C9.01658 15.0921 9.04398 15.1067 9.07179 15.1207C9.07385 15.1218 9.07591 15.1228 9.07817 15.1238C9.1513 15.1603 9.22649 15.1916 9.30271 15.218C9.65763 15.341 10.041 15.3543 10.4107 15.2522C10.8924 15.1189 11.2932 14.806 11.5396 14.3713L12.8639 12.0343L15.2285 12.202L21.5251 18.4984C21.8415 18.8152 21.8415 19.3304 21.5249 19.647ZM21.7443 17.2202L15.8374 11.3136C15.8263 11.3022 15.8146 11.2915 15.8024 11.2814C15.7174 11.2106 15.6119 11.1677 15.5006 11.1599L12.6054 10.9545C12.4052 10.9407 12.2062 11.0472 12.1073 11.2217L10.6184 13.8494C10.5115 14.038 10.3374 14.1738 10.1283 14.2317C9.91945 14.2896 9.70027 14.2624 9.51138 14.1555C9.32269 14.0486 9.18694 13.8745 9.12905 13.6654C9.07117 13.4563 9.09815 13.2371 9.20527 13.0485L11.1929 9.54059L11.9983 9.30884C12.0037 9.3072 12.0088 9.30514 12.0142 9.30349L15.0203 8.43543H18.6523L23.1867 14.1995L21.7443 17.2202ZM23.8803 13.3686L19.6871 8.03518L21.8271 6.67418L25.7453 11.7637L23.8803 13.3686Z"
                      fill={activetab === 'Contract Based' ? '#00A1FF' :'#111827'}
                      />
                      <path
                        d="M16.3536 6.38259C16.4892 6.38259 16.6247 6.33089 16.7281 6.22748L20.3445 2.61105C20.5514 2.40424 20.5514 2.06908 20.3445 1.86227C20.1377 1.65545 19.8026 1.65545 19.5958 1.86227L15.9793 5.47869C15.7725 5.68551 15.7725 6.02066 15.9793 6.22748C16.0827 6.33089 16.2183 6.38259 16.3536 6.38259Z"
                        fill={activetab === 'Contract Based' ? '#00A1FF' :'#111827'}
                      />
                      <path
                        d="M10.2676 6.22748C10.371 6.33089 10.5066 6.38259 10.6421 6.38259C10.7775 6.38259 10.913 6.33089 11.0164 6.22748C11.2232 6.02066 11.2232 5.68551 11.0164 5.47869L7.39999 1.86227C7.19318 1.65545 6.85802 1.65545 6.65121 1.86227C6.44439 2.06908 6.44439 2.40424 6.65121 2.61105L10.2676 6.22748Z"
                       fill={activetab === 'Contract Based' ? '#00A1FF' :'#111827'}
                      />
                      <path
                        d="M13.4982 6.3825C13.7905 6.3825 14.0276 6.1454 14.0276 5.8531V2.86021C14.0276 2.56791 13.7905 2.33081 13.4982 2.33081C13.2058 2.33081 12.9688 2.56791 12.9688 2.86021V5.8531C12.9688 6.1454 13.2058 6.3825 13.4982 6.3825Z"
                        fill={activetab === 'Contract Based' ? '#00A1FF' :'#111827'}
                      />
                      <path
                        d="M13.0121 0.941386C13.0961 1.14511 13.3056 1.2788 13.5267 1.26727C13.745 1.25594 13.9368 1.10845 14.0044 0.9006C14.0721 0.691104 13.9984 0.452358 13.8229 0.318874C13.6439 0.182506 13.3942 0.174884 13.207 0.298686C12.9981 0.436702 12.9171 0.711498 13.0121 0.941386Z"
                         fill={activetab === 'Contract Based' ? '#00A1FF' :'#111827'}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1377_1791">
                        <rect width="27" height="27" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                 <span className={` text-sm font-medium  ${activetab ===  'Contract Based' ? 'text-primary':' text-[#111827]'}`}>Contract Based</span>
                </button>
              </div>
              <div>
             {(activetab === 'All' || activetab === 'Contract Based' || activetab === 'Service Based') &&  (<>
              
                <div className="scrollbar-webkit relative mt-8 overflow-x-auto rounded-3xl">
                  <table className="min-w-full bg-white text-base">
                  
                    <thead>
                      <tr className="bg-white text-left text-gray-700 text-sm font-medium">
                        <th className="px-4 py-3 text-[#2B2B2B]">
                          <input type="checkbox" onChange={handleSelectAll} />
                        </th>
                        <th className="px-4 py-3">Job ID.</th>
                        <th className="px-4 py-3">Job Type</th>
                        <th className="px-4 py-3">Assigned To</th>
                        <th className="px-4 py-3">Date Assigned</th>
                        <th className="px-4 py-3">Due Date</th>
                        <th className="px-4 py-3">Invoice</th>
                        <th className="px-4 py-3">Billing Status</th>
                        <th className="px-4 py-3">Completion Status</th>
                        <th className="px-4 py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-[#2B2B2B]">
                            <input
                              type="checkbox"
                              checked={selectedUsers.includes(user.name)}
                              onChange={(e) => handleSelectUser(e, user.name)}
                            />
                          </td>
                          <td className="min-w-[130px] px-4 py-3 text-lightext md:w-auto text-sm">
                            {user.JobID}
                          </td>
                          <td className="min-w-[100px] px-4 py-3 text-[#2B2B2B] md:w-auto text-sm">
                            {user.Job_Type} text-sm 
                          </td>
                          <td className="min-w-[100px] px-4 py-3 text-[#2B2B2B] md:w-auto text-sm">
                            {user.AssignedTo}
                          </td>
                          <td className="min-w-[150px] px-4 py-3 text-[#2B2B2B] md:w-auto text-sm ">
                            {user.Date_Assigned}
                          </td>
                          <td className="min-w-[130px] px-4 py-3 text-[#2B2B2B] md:w-auto text-sm ">
                            {user.Due_Date}
                          </td>
                          <td className="min-w-[100px] px-4 py-3 text-[#2B2B2B] md:w-auto text-sm ">
                            {user.Linked_Invoice}
                          </td>
                          <td className="min-w-[100px] px-4 py-3 text-[#2B2B2B] md:w-auto text-sm ">
                            {user.Billing_Status}
                          </td>
                          <td className="min-w-[100px] px-4 py-3 text-[#2B2B2B] ">
                            <span
                              className={`rounded-full border-[1.5px] p-1 px-2 text-xs hover:scale-110 cursor-pointer  text-sm ${getStatusClass(user.CompletedTask)}`}
                            >
                              {user.CompletedTask}
                            </span>
                          </td>
                          <td className="relative flex space-x-2 px-4 py-3 text-[#2B2B2B]">
                            <button onClick={() => handleOpen(user.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="22"
                                viewBox="0 0 6 22"
                                fill="none"
                              >
                                <path
                                  d="M2.75065 11.9166C3.25691 11.9166 3.66732 11.5062 3.66732 10.9999C3.66732 10.4937 3.25691 10.0833 2.75065 10.0833C2.24439 10.0833 1.83398 10.4937 1.83398 10.9999C1.83398 11.5062 2.24439 11.9166 2.75065 11.9166Z"
                                  stroke="#111827"
                                  stroke-opacity="0.5"
                                  stroke-width="1.83333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.75065 5.50008C3.25691 5.50008 3.66732 5.08968 3.66732 4.58341C3.66732 4.07715 3.25691 3.66675 2.75065 3.66675C2.24439 3.66675 1.83398 4.07715 1.83398 4.58341C1.83398 5.08968 2.24439 5.50008 2.75065 5.50008Z"
                                  stroke="#111827"
                                  stroke-opacity="0.5"
                                  stroke-width="1.83333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M2.75065 18.3333C3.25691 18.3333 3.66732 17.9229 3.66732 17.4167C3.66732 16.9104 3.25691 16.5 2.75065 16.5C2.24439 16.5 1.83398 16.9104 1.83398 17.4167C1.83398 17.9229 2.24439 18.3333 2.75065 18.3333Z"
                                  stroke="#111827"
                                  stroke-opacity="0.5"
                                  stroke-width="1.83333"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                            {openTool === user.id && (
                              <div
                                ref={dropdownRef}
                                className="absolute top-[25px] right-0 z-10 mt-2 w-40 rounded-md border border-gray-300 bg-white shadow-lg"
                              >
                                <div className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                  <span className="mr-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="17"
                                      height="17"
                                      viewBox="0 0 17 17"
                                      fill="none"
                                    >
                                      <g
                                        opacity="0.8"
                                        clip-path="url(#clip0_744_4386)"
                                      >
                                        <path
                                          d="M12.666 12.6669C11.459 13.5869 9.98934 14.0966 8.47191 14.1214C3.52938 14.1214 0.705078 8.47284 0.705078 8.47284C1.58336 6.83608 2.80151 5.40608 4.27782 4.27875M6.98915 2.99369C7.47516 2.87993 7.97276 2.82306 8.47191 2.82424C13.4144 2.82424 16.2387 8.47284 16.2387 8.47284C15.8101 9.27466 15.299 10.0295 14.7136 10.7252M9.96879 9.96972C9.77486 10.1778 9.54101 10.3448 9.28118 10.4605C9.02134 10.5763 8.74085 10.6386 8.45644 10.6436C8.17202 10.6486 7.88951 10.5963 7.62575 10.4897C7.362 10.3832 7.1224 10.2246 6.92126 10.0235C6.72011 9.82235 6.56154 9.58275 6.45501 9.31899C6.34847 9.05524 6.29615 8.77272 6.30117 8.48831C6.30619 8.20389 6.36844 7.9234 6.48422 7.66357C6.59999 7.40374 6.76691 7.16988 6.97503 6.97596"
                                          stroke="#111827"
                                          stroke-width="1.41215"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_744_4386">
                                          <rect
                                            width="16.9458"
                                            height="16.9458"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                  View
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>) }

                <div className="mt-4 flex justify-end gap-1 pb-6">
                  <Link
                    href="#"
                    className="flex rotate-180 items-center rounded-lg border px-2 py-1 text-sm text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  {['1', '2', '3', '...', '21'].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="flex items-center rounded-lg border px-2 py-1 text-sm text-gray-600"
                    >
                      {item}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className="flex items-center rounded-lg border px-2 py-1 text-sm text-gray-600"
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
             </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <JobSelectionForm />
        </>
      )}

      <></>
    </>
  );
};

export default JobsTables;
