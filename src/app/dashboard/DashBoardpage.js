import React from 'react';

import TotalActive from './DashboardComponents/TotalActive';
import PendingApprovals from './DashboardComponents/PendingApprovals';
import TimesheetChart from './DashboardComponents/TimesheetChart';
import DonutChartCard from './DashboardComponents/DonutChartCard';
import LaborTable from './DashboardComponents/LaborTable';
import InvoiceGenerated from './DashboardComponents/InvoiceGenerated';
import Otp from '@/components/ui/Otp';

const DashBoardpage = () => {
  return (
<div className='mt-4'>
      <div className="container mx-auto space-y-6 p-6">

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr_2fr]">
        <InvoiceGenerated />
        <TotalActive />
        <PendingApprovals />
      </div>

    
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[1fr_5fr] xl:grid-cols-[2fr_5fr]">
        <div className="lg:grid-row-2 grid grid-cols-1 gap-6">
          <TimesheetChart />
          <DonutChartCard />
        </div>
        <div>
          <LaborTable />
        </div>
      </div>

 
    </div>
</div>
  );
};

export default DashBoardpage;
