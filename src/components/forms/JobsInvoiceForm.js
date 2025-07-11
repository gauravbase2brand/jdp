import React, { useEffect, useState } from 'react';
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
    <div className="mx-auto max-w-5xl rounded-lg p-3">
      <div className="grid-row grid">
        <div className="mb-3 grid gap-3 rounded-lg bg-white p-3 shadow-sm lg:grid-cols-[4fr_3fr] lg:p-6">
          <div className="">
            <h2 className="text-3xl font-bold">Invoice</h2>
            <div className="text-lg font-bold text-red-500">PAST DUE</div>
          </div>

          {/* Invoice Information */}
          <div>
            <div className="mb-1 grid gap-2 lg:grid-cols-2">
              <div>
                <div>
                  <label className="mb-1 text-sm text-gray-600">
                    Date Assigned
                  </label>
                  <DatePicker
                    size="large"
                    style={{ width: '100%', borderRadius: '20px' }}
                    placeholder="Select Date"
                  />
                </div>
                <div>
                  <label className="mb-1 text-sm text-gray-600">
                    Invoice #
                  </label>
                  <Input
                    size="large"
                    placeholder="Enter invoice number"
                    style={{ borderRadius: '20px' }}
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 text-sm text-gray-600">Bill To</label>
                <Input.TextArea
                  rows={4}
                  placeholder="Enter billing details"
                  style={{ borderRadius: '20px' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="mb-1 text-sm text-gray-600">P.O.No.</label>
                <Input
                  size="large"
                  placeholder="P.O.No."
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div>
                <label className="mb-1 text-sm text-gray-600">Rep</label>
                <Input
                  size="large"
                  placeholder="NGM"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div>
                <label className="mb-1 text-sm text-gray-600">Due Date</label>
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
        <div className="mb-6 max-w-full overflow-x-auto rounded-lg shadow-sm">
          <table className="min-w-full table-auto border-collapse">
            <thead className="sticky top-0 z-10 bg-gray-100">
              <tr className="!bg-white text-left text-sm font-medium text-gray-700">
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
                  <td className="text-lightext px-4 py-2 text-sm">
                    {item.qty}
                  </td>
                  <td className="text-lightext px-4 py-2 text-sm">
                    {item.item}
                  </td>
                  <td className="text-lightext min-w-[260px] px-4 py-2 text-sm">
                    {item.description}
                  </td>
                  <td className="text-lightext px-4 py-2 text-sm">
                    ${item.rate}
                  </td>
                  <td className="text-lightext px-4 py-2 text-sm">
                    ${item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Total Section */}
      <div className="text-lightext ml-auto lg:w-1/3">
        <div className="mt-4 flex justify-between gap-3 text-xl font-semibold">
          <div>Total</div>
          <div>${totalAmount}</div>
        </div>

        <div className="mt-2 flex justify-between text-lg font-semibold">
          <div>Payments/Credits</div>
          <div>$0.00</div>
        </div>

        <div className="mt-2 flex justify-between text-xl font-semibold">
          <div>Total</div>
          <div>${totalAmount}</div>
        </div>
      </div>

      {/* Action Buttons */}
      {/* <div className="mt-6 flex justify-between">
        <Button size="large" type="default">Back</Button>
        <Button size="large" type="primary">Save & Edit</Button>
        <Button size="large" type="primary">Send Mail</Button>
      </div> */}
    </div>
  );
};

export default JobsInvoiceForm;
