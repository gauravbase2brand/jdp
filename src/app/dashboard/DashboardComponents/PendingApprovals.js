'use client';

import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const PendingApprovals = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-500">Pending Approvals</span>
        <span className="text-2xl font-semibold">$1.245</span>
        <span className="text-xs text-gray-400">Since last month</span>
      </div>

      {/* Chart */}
      <div className="-ml-4 -mb-6">
        <LineChart
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 2,
              stroke: '#FF6D3A',
            },
            '.MuiMarkElement-root': {
              display: 'none',
            },
            '.MuiAreaElement-root': {
              fill: '#FF6D3A',
              opacity: 0.3,
            },
          }}
          height={100}
          style={{ width: '100%' }} 
          xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
          series={[
            {
              data: [1, 1.5, 1.3, 2.8, 2.5, 2.9],
              area: true,
            },
          ]}
          disableAxisListener
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF6D3A" />
              <stop offset="100%" stopColor="#FF6D3A" stopOpacity={0} />
            </linearGradient>
          </defs>
        </LineChart>
      </div>

      {/* Legends */}
      <div className="mt-2 flex justify-between text-xs text-gray-600">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
          Apr 07 - Apr 14
        </div>
        <span>8,848</span>
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
          Last Week
        </div>
        <span>4,298</span>
      </div>
    </div>
  );
};

export default PendingApprovals;
