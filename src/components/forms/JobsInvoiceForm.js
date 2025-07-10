import React, { useState } from 'react';
import { Input, DatePicker, Button, Table } from 'antd';
import AntinputBox from '../ui/AntinputBox';


const JobsInvoiceForm = () => {
  const [dueDate, setDueDate] = useState(null);

  const handleDueDateChange = (date, dateString) => {
    setDueDate(dateString);
  };

  const columns = [
    {
      title: 'QTY',
      dataIndex: 'qty',
      key: 'qty',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
      render: (text) => <span>${text}</span>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => <span>${text}</span>,
    },
  ];

  const data = [
    {
      key: '1',
      qty: 1,
      item: 'Labor',
      description: 'Dennis 11-11-24',
      rate: 150,
      amount: 130,
    },
    {
      key: '2',
      qty: 1,
      item: 'Screw',
      description: 'Time & material to install timer',
      rate: 150,
      amount: 150,
    },
    {
      key: '3',
      qty: 1,
      item: 'Labor',
      description: 'Dennis 11-11-24',
      rate: 150,
      amount: 130,
    },
    {
      key: '4',
      qty: 1,
      item: 'Screw',
      description: 'Time & material to install timer',
      rate: 150,
      amount: 150,
    },
    {
      key: '5',
      qty: 1,
      item: 'Labor',
      description: 'Dennis 11-11-24',
      rate: 150,
      amount: 130,
    },
  ];

  const totalAmount = data.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Invoice</h2>
      
      {/* Invoice Header */}
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Date Assigned</label>
          <DatePicker
            size="large"
            style={{ width: '100%', borderRadius:"20px" }}   
            placeholder="Select Date"
            // onChange={handleDueDateChange}
            // value={dueDate ? moment(dueDate, 'YYYY-MM-DD') : null}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Invoice #</label>
          <Input size="large" placeholder="Enter invoice number" style={{borderRadius:"20px"}} />
        </div>
        {/* <AntinputBox></AntinputBox> */}
      </div>

      <div className="mb-4 flex justify-between">
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">P.O. No.</label>
          <Input size="large" placeholder="Enter P.O. Number" style={{borderRadius:"20px"}} />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Bill To</label>
          <Input size="large" placeholder="Enter Bill To" style={{borderRadius:"20px"}} />
        </div>
      </div>

      <div className="mb-4 flex justify-between">
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Rep</label>
          <Input size="large" placeholder="Enter Rep Name" style={{borderRadius:"20px"}} />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm text-gray-600 mb-1">Due Date</label>
          <DatePicker
            size="large"
            style={{ width: '100%' , borderRadius:"20px"}}
            placeholder="Enter Due Date"
            // onChange={handleDueDateChange}
            // value={dueDate ? moment(dueDate, 'YYYY-MM-DD') : null}
          />
        </div>
      </div>

      {/* Table for Itemized Billing */}
      <Table columns={columns} dataSource={data} pagination={false} />

      {/* Total Section */}
      <div className="flex justify-between mt-4 text-xl font-semibold">
        <div>Total</div>
        <div>${totalAmount}</div>
      </div>
      
      <div className="flex justify-between mt-2 text-lg font-medium">
        <div>Payments/Credits</div>
        <div>$0.00</div>
      </div>

      <div className="flex justify-between mt-2 text-xl font-semibold">
        <div>Total</div>
        <div>${totalAmount}</div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <Button size="large" type="default">Back</Button>
        <Button size="large" type="primary">Save & Edit</Button>
        <Button size="large" type="primary">Send Mail</Button>
      </div>
    </div>
  );
};

export default JobsInvoiceForm;
