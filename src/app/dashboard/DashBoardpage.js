import React from 'react'

import TotalActive from './DashboardComponents/TotalActive'
import PendingApprovals from './DashboardComponents/PendingApprovals'
import TimesheetChart from './DashboardComponents/TimesheetChart'
import DonutChartCard from './DashboardComponents/DonutChartCard'
import LaborTable from './DashboardComponents/LaborTable'
import InvoiceGenerated from './DashboardComponents/InvoiceGenerated'


const DashBoardpage = () => {
  return (
    <div className="p-6 space-y-6 container mx-auto">
      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr_2fr] gap-6">
        <InvoiceGenerated />
        <TotalActive />
        <PendingApprovals />
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1  lg:grid-cols-[1fr_5fr] gap-6">
        <div className="grid grid-cols-1 lg:grid-row-2 gap-6">
  <TimesheetChart />
        <DonutChartCard />
        </div>
       <div>
        <LaborTable />
      </div>
      </div>

      {/* Labor Table */}
     
    </div>
  );
};

export default DashBoardpage;