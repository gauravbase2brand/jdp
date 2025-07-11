import React, { useState } from 'react';
import { Input, DatePicker, Button } from 'antd';

const JobsInvoiceForm = () => {
  const [dueDate, setDueDate] = useState(null);

  const handleDueDateChange = (date, dateString) => {
    setDueDate(dateString);
  };

  const columns = [
    { title: 'QTY', dataIndex: 'qty', key: 'qty' },
    { title: 'Item', dataIndex: 'item', key: 'item' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    { title: 'Rate', dataIndex: 'rate', key: 'rate', render: (text) => <span>${text}</span> },
    { title: 'Amount', dataIndex: 'amount', key: 'amount', render: (text) => <span>${text}</span> },
  ];

  const data = [
    { key: '1', qty: 1, item: 'Labor', description: 'Dennis 11-11-24', rate: 150, amount: 130 },
    { key: '2', qty: 1, item: 'Screw', description: 'Time & material to install timer', rate: 150, amount: 150 },
    { key: '3', qty: 1, item: 'Labor', description: 'Dennis 11-11-24', rate: 150, amount: 130 },
    { key: '4', qty: 1, item: 'Screw', description: 'Time & material to install timer', rate: 150, amount: 150 },
    { key: '5', qty: 1, item: 'Labor', description: 'Dennis 11-11-24', rate: 150, amount: 130 },
  ];

  const totalAmount = data.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="mx-auto max-w-5xl p-3 rounded-lg">
      <div className='grid grid-row'>
      
      <div className='grid lg:grid-cols-[4fr_3fr] gap-3 mb-3 bg-white shadow-sm lg:p-6 p-3 rounded-lg'>
        <div className="">
          <h2 className="text-3xl font-bold">Invoice</h2>
          <div className="text-red-500 text-lg font-bold">PAST DUE</div>
        </div>

        {/* Invoice Information */}
        <div>
          <div className="grid lg:grid-cols-2 gap-2 mb-1">
            <div>
              <div>
                <label className="text-sm text-gray-600 mb-1">Date Assigned</label>
                <DatePicker
                  size="large"
                  style={{ width: '100%', borderRadius: '20px' }}
                  placeholder="Select Date"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-1">Invoice #</label>
                <Input size="large" placeholder="Enter invoice number" style={{ borderRadius: '20px' }} />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1">Bill To</label>
              <Input.TextArea rows={4} placeholder="Enter billing details" style={{ borderRadius: '20px' }} />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-2'>
            <div>
              <label className="text-sm text-gray-600 mb-1">P.O.No.</label>
              <Input size="large" placeholder="P.O.No." style={{ borderRadius: '20px' }} />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1">Rep</label>
              <Input size="large" placeholder="NGM" style={{ borderRadius: '20px' }} />
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1">Due Date</label>
              <DatePicker
                size="large"
                style={{ width: '100%', borderRadius: '20px' }}
                placeholder="Enter Due Date"
                onChange={handleDueDateChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Itemized Billing Table */}
      <div className="overflow-x-auto max-w-full mb-6 shadow-sm rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className=" !bg-white text-left text-gray-700 text-sm font-medium">
              <th className="px-4 py-3">QTY</th>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Rate</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.key} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-lightext">{item.qty}</td>
                <td className="px-4 py-2 text-sm text-lightext">{item.item}</td>
                <td className="min-w-[260px] px-4 py-2 text-sm text-lightext">{item.description}</td>
                <td className="px-4 py-2 text-sm text-lightext">${item.rate}</td>
                <td className="px-4 py-2 text-sm text-lightext">${item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
      {/* Total Section */}
      <div className='lg:w-1/3 ml-auto text-lightext'>
        <div className="flex justify-between gap-3 mt-4 text-xl font-semibold">
          <div>Total</div>
          <div>${totalAmount}</div>
        </div>

        <div className="flex justify-between mt-2 text-lg font-semibold">
          <div>Payments/Credits</div>
          <div>$0.00</div>
        </div>

        <div className="flex justify-between mt-2 text-xl font-semibold">
          <div>Total</div>
          <div>${totalAmount}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between">
        <Button size="large" type="default">Back</Button>
        <Button size="large" type="primary">Save & Edit</Button>
        <Button size="large" type="primary">Send Mail</Button>
      </div>
    </div>
  );
};

export default JobsInvoiceForm;
