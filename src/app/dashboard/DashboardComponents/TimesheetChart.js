'use client';

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const TimesheetChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">Timesheets Submitted</span>
        <span className="text-2xl font-semibold">09:00 hrs</span>
        <span className="text-xs text-gray-400">Last 7 days</span>
      </div>

      {/* Chart */}
      <div className="-ml-4 -mb-6">
        <BarChart
          sx={{
            '.MuiBarElement-root': {
              backgroundColor: '#00C897',
              borderRadius: '4px',
            },
          }}
          height={100}
          width={250}
          xAxis={[{ data: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] }]}
          series={[
            {
              data: [1, 1, 1, 1, 1, 1, 1], // Example data for billable hours
            },
          ]}
          disableAxisListener
        />
      </div>

      {/* Legends */}
      <div className="mt-2 flex justify-between text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
          Billable 09:00 hrs
        </div>
        <span>Total 09:00 hrs</span>
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
          Last Week
        </div>
        <span>09:00 hrs</span>
      </div>
    </div>
  );
};

export default TimesheetChart;
