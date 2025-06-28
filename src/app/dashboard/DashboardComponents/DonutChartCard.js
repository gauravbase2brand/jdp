'use client';

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const pieData = [
  { value: 40, label: 'Used', color: '#3b82f6' },  // Blue segment
  { value: 20, label: 'In Progress', color: '#f87171' },  // Red segment
  { value: 40, label: 'Free', color: '#10b981' },  // Green segment
];

const size = {
  width: 250,
  height: 250,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 18,
  fontWeight: 600,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full h-auto  ">
      <div className="text-sm text-gray-600 mb-1">Storage Usage</div>
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 70,
            outerRadius: 90,
            paddingAngle: 3,
            cornerRadius: 5,
          },
        ]}
        slotProps={{ legend: { hidden: true } }}
        {...size}
      >
        {/* Data label inside the pie chart */}
        <PieCenterLabel>40%</PieCenterLabel>
      </PieChart>

   
   
    </div>
  );
}
