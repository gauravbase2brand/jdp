'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const JobsTables = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [openTool, setOpenTool] = useState(null); // Use null to indicate no dropdown is open
  const dropdownRef = useRef(null); // Ref to detect clicks outside of dropdown

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
    {
      id: 8,
      JobID: 'Danial',
      Job_Type: 'Contract',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Created',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
    {
      id: 9,
      JobID: 'Jazz',
      Job_Type: 'Contract',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Created',
      Billing_Status: 'Billable',
      CompletedTask: 'Assigned',
    },
    {
      id: 10,
      JobID: 'Harper',
      Job_Type: 'Contract',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2025',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Created',
      Billing_Status: 'Billable',
      CompletedTask: 'Completed',
    },
    {
      id: 11,
      JobID: 'Hanny',
      Job_Type: 'Contract',
      AssignedTo: 'Labor_1',
      Date_Assigned: '27-4-2023',
      Due_Date: '28-4-2025',
      Linked_Invoice: 'Sent',
      Billing_Status: 'Billable',
      CompletedTask: 'Delayed',
    },
  ];


const getStatusClass = (CompletedTask) =>{
    switch (CompletedTask) {
      case 'Assigned':
        return 'text-blue-500 font-semibold  ';
      case 'In Progress':
        return 'text-yellow-500 font-semibold';
      case 'Completed':
        return 'text-green-500 font-semibold';
      case 'Delayed':
        return 'text-orange-500 font-semibold';
      default:
        return '';
    }
}


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

  return (
    <>
      <div>
        <div className="relative mt-8 overflow-x-auto rounded-3xl">
          <table className="min-w-full bg-white">
            <thead>
              <tr
                className="bg-white text-left text-black"
                style={{
                  background: '#ffffff',
                }}
              >
                <th className="px-4 py-3 text-[#2B2B2B]">
                  <input type="checkbox" onChange={handleSelectAll} />
                </th>
                <th className="px-4 py-3">Job ID.</th>
                <th className="px-4 py-3">Job Type</th>
                <th className="px-4 py-3">Assigned To</th>
                <th className="px-4 py-3">Date Assigned</th>
                <th className="px-4 py-3">Due_Date</th>
                <th className="px-4 py-3">Linked Invoice</th>
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
                  <td className="px-4 py-3 text-[#2B2B2B]">{user.JobID}</td>
                  <td className="px-4 py-3 text-[#2B2B2B]">{user.Job_Type}</td>
                  <td className="px-4 py-3 text-[#2B2B2B]">
                    {user.AssignedTo}
                  </td>
                  <td className="px-4 py-3 text-[#2B2B2B]">
                    {user.Date_Assigned}
                  </td>
                  <td className="px-4 py-3 text-[#2B2B2B]">{user.Due_Date}</td>
                  <td className="px-4 py-3 text-[#2B2B2B]">
                    {user.Linked_Invoice}
                  </td>
                  <td className="px-4 py-3 text-[#2B2B2B]">
                    {user.Billing_Status}
                  </td>
                  <td className="px-4 py-3 text-[#2B2B2B]">
                 <span className={`p-1.5 rounded-full border-[1.5px] ${getStatusClass(user.CompletedTask)}`}>   {user.CompletedTask}</span>
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
                              <g opacity="0.8" clip-path="url(#clip0_744_4386)">
                                <path
                                  d="M12.666 12.6669C11.459 13.5869 9.98934 14.0966 8.47191 14.1214C3.52938 14.1214 0.705078 8.47284 0.705078 8.47284C1.58336 6.83608 2.80151 5.40608 4.27782 4.27875M6.98915 2.99369C7.47516 2.87993 7.97276 2.82306 8.47191 2.82424C13.4144 2.82424 16.2387 8.47284 16.2387 8.47284C15.8101 9.27466 15.299 10.0295 14.7136 10.7252M9.96879 9.96972C9.77486 10.1778 9.54101 10.3448 9.28118 10.4605C9.02134 10.5763 8.74085 10.6386 8.45644 10.6436C8.17202 10.6486 7.88951 10.5963 7.62575 10.4897C7.362 10.3832 7.1224 10.2246 6.92126 10.0235C6.72011 9.82235 6.56154 9.58275 6.45501 9.31899C6.34847 9.05524 6.29615 8.77272 6.30117 8.48831C6.30619 8.20389 6.36844 7.9234 6.48422 7.66357C6.59999 7.40374 6.76691 7.16988 6.97503 6.97596"
                                  stroke="#111827"
                                  stroke-width="1.41215"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M0.705078 0.706055L16.2387 16.2397"
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
                          </span>{' '}
                          View
                        </div>
                        <div className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <g opacity="0.8">
                                <path
                                  d="M14.2972 7.57071C14.0976 7.57071 13.9062 7.65043 13.7651 7.79233C13.624 7.93422 13.5447 8.12667 13.5447 8.32734V12.8671C13.5447 13.0678 13.4654 13.2603 13.3243 13.4022C13.1832 13.5441 12.9918 13.6238 12.7922 13.6238H2.25745C2.05788 13.6238 1.86648 13.5441 1.72536 13.4022C1.58425 13.2603 1.50497 13.0678 1.50497 12.8671V2.27428C1.50497 2.07361 1.58425 1.88116 1.72536 1.73926C1.86648 1.59737 2.05788 1.51765 2.25745 1.51765H6.77235C6.97192 1.51765 7.16331 1.43794 7.30443 1.29604C7.44555 1.15414 7.52483 0.961691 7.52483 0.76102C7.52483 0.560348 7.44555 0.367896 7.30443 0.226C7.16331 0.0841036 6.97192 0.00438721 6.77235 0.00438721H2.25745C1.65874 0.00438721 1.08455 0.243537 0.661192 0.669225C0.237838 1.09491 0 1.67227 0 2.27428V12.8671C0 13.4692 0.237838 14.0465 0.661192 14.4722C1.08455 14.8979 1.65874 15.137 2.25745 15.137H12.7922C13.3909 15.137 13.9651 14.8979 14.3885 14.4722C14.8118 14.0465 15.0497 13.4692 15.0497 12.8671V8.32734C15.0497 8.12667 14.9704 7.93422 14.8293 7.79233C14.6881 7.65043 14.4967 7.57071 14.2972 7.57071ZM3.00993 8.14575V11.3539C3.00993 11.5545 3.08921 11.747 3.23033 11.8889C3.37145 12.0308 3.56284 12.1105 3.76241 12.1105H6.95294C7.05197 12.1111 7.15014 12.092 7.24183 12.0543C7.33351 12.0167 7.41689 11.9612 7.48721 11.8911L12.6944 6.64762L14.8314 4.54418C14.902 4.47384 14.9579 4.39016 14.9962 4.29796C15.0344 4.20575 15.054 4.10686 15.054 4.00697C15.054 3.90709 15.0344 3.80819 14.9962 3.71599C14.9579 3.62379 14.902 3.5401 14.8314 3.46976L11.6409 0.223811C11.571 0.152893 11.4877 0.0966035 11.396 0.0581903C11.3043 0.019777 11.206 0 11.1066 0C11.0073 0 10.909 0.019777 10.8173 0.0581903C10.7256 0.0966035 10.6423 0.152893 10.5724 0.223811L8.45038 2.36508L3.22815 7.60854C3.15841 7.67924 3.10323 7.76309 3.06579 7.85528C3.02834 7.94746 3.00936 8.04618 3.00993 8.14575ZM11.1066 1.82787L13.2362 3.96914L12.1676 5.04356L10.0381 2.90229L11.1066 1.82787ZM4.5149 8.45597L8.97712 3.96914L11.1066 6.11041L6.64442 10.5972H4.5149V8.45597Z"
                                  fill="#111827"
                                />
                              </g>
                            </svg>
                          </span>{' '}
                          Edit
                        </div>
                        <div className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="16"
                              viewBox="0 0 14 16"
                              fill="none"
                            >
                              <path
                                opacity="0.8"
                                d="M2.53963 15.1326C2.07403 15.1326 1.67559 14.9682 1.34431 14.6392C1.01303 14.3102 0.847108 13.9142 0.846543 13.4512V2.52211H0V0.840703H4.23272V0H9.31198V0.840703H13.5447V2.52211H12.6981V13.4512C12.6981 13.9136 12.5325 14.3096 12.2012 14.6392C11.8699 14.9687 11.4712 15.1332 11.0051 15.1326H2.53963ZM11.0051 2.52211H2.53963V13.4512H11.0051V2.52211ZM4.23272 11.7698H5.9258V4.20351H4.23272V11.7698ZM7.61889 11.7698H9.31198V4.20351H7.61889V11.7698Z"
                                fill="#111827"
                              />
                            </svg>
                          </span>{' '}
                          Delete
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      <></>
    </>
  );
};

export default JobsTables;
