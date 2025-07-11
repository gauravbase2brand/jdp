import React from 'react';

const LaborTable = () => {
  const laborData = [
    {
      employee: 'John Carter',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Assigned',
    },
    {
      employee: 'Maria',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'In Progress',
    },
    {
      employee: 'Alex',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Completed',
    },
    {
      employee: 'David',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Delayed',
    },
    {
      employee: 'Kevin',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Assigned',
    },
    {
      employee: 'Samuel',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Completed',
    },
    {
      employee: 'Samuel',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Completed',
    },
    {
      employee: 'Samuel',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Completed',
    },
    {
      employee: 'Samuel',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Completed',
    },
    {
      employee: 'Samuel',
      task: 'Electrical Wiring',
      project: 'Site A',
      shiftTime: '8:00 AM - 4:00 PM',
      status: 'Completed',
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
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
  };

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <table className="min-w-full table-auto bg-white">
        <thead
          className="!bg-[#ffffff] text-gray-700"
          style={{
            backgroundColor: '#ffffff',
          }}
        >
          <div>
            <h3 className="px-6 py-3 text-[16px] font-semibold">
              {' '}
              Labor Assigned Today
            </h3>
          </div>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">
              Employee
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium">Task</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Project</th>
            <th className="px-6 py-3 text-left text-sm font-medium">
              Shift Time
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {laborData.map((labor, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-4 text-sm">{labor.employee}</td>
              <td className="px-6 py-4 text-sm">{labor.task}</td>
              <td className="px-6 py-4 text-sm">{labor.project}</td>
              <td className="px-6 py-4 text-sm">{labor.shiftTime}</td>
              <td
                className={`px-6 py-4 text-sm `}
              >
              <span className={` p-1.5 rounded-full border-[1.5px] ${getStatusClass(labor.status)}`}>  {labor.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaborTable;
