import React, { useState } from 'react';
import { Select } from 'antd';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';
const JobsInvoice = ({step, setStep}) => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [textAreaData, setTextAreaData] = useState('');
  const [inviocepopop, setinviocepopop] = useState(true);
  const showTab = (tabName) => {
    setActiveTab(tabName);
  };
  const [togle, settogel] = useState(false);

  const handelTogle = () => {
    settogel(!togle);
  };
  const router = useRouter();

  const handleRowClick = (title) => {
    // router.push(`${title}`)
    setinviocepopop(false);
    console.log(title , ":thissis is title");
    setStep(step+1)
    
 
  };
  const tableData = [
    {
      title: 'Acme Plumbing',
      type: 'Invoice',
      num: '1001',
      date: '01/07/2025',
      account: '2000 Trade Services',
      memo: 'Plumbing work completed',
      poNumber: 'PO-1001',
      openBalance: '3,500.00',
    },
    {
      title: 'Bright Electrical',
      type: 'Receipt',
      num: '1002',
      date: '02/07/2025',
      account: '2100 Electrical',
      memo: 'Payment received for wiring',
      poNumber: 'PO-1002',
      openBalance: '0.00',
    },
    {
      title: 'Green Landscapes',
      type: 'Invoice',
      num: '1003',
      date: '03/07/2025',
      account: '2200 Landscaping',
      memo: 'Garden maintenance service',
      poNumber: 'PO-1003',
      openBalance: '1,200.00',
    },
    {
      title: 'Safe Security',
      type: 'Invoice',
      num: '1004',
      date: '04/07/2025',
      account: '2300 Security',
      memo: 'Alarm system installation',
      poNumber: 'PO-1004',
      openBalance: '2,800.00',
    },
    {
      title: 'Cool Air Solutions',
      type: 'Receipt',
      num: '1005',
      date: '05/07/2025',
      account: '2400 Air Conditioning',
      memo: 'Payment for AC repair',
      poNumber: 'PO-1005',
      openBalance: '0.00',
    },
    {
      title: 'Acme Plumbing',
      type: 'Invoice',
      num: '1001',
      date: '01/07/2025',
      account: '2000 Trade Services',
      memo: 'Plumbing work completed',
      poNumber: 'PO-1001',
      openBalance: '3,500.00',
    },
    {
      title: 'Bright Electrical',
      type: 'Receipt',
      num: '1002',
      date: '02/07/2025',
      account: '2100 Electrical',
      memo: 'Payment received for wiring',
      poNumber: 'PO-1002',
      openBalance: '0.00',
    },
  ];

  const txtData = (e) => {
    setTextAreaData(e.target.value); // Update state when textarea content changes
  };

  const noteData = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Textarea Data:', textAreaData); // Log the state value
  };

  return (
    <>
      {inviocepopop ? (
        <>
          <div className="mt-8">
            <div className="mb-3 grid grid-cols-1">
              <div className="relative mb-3 rounded-3xl bg-white p-3 md:p-6">
                <button
                  onClick={handelTogle}
                  className="bg-primary animate-popup absolute top-[-5px] right-4 rounded-full p-2 text-white opacity-70 transition-opacity duration-300 hover:opacity-100 active:opacity-50"
                >
                  {togle ? (
                    <>
                      <IoIosArrowDown />
                    </>
                  ) : (
                    <>
                      <IoIosArrowUp />
                    </>
                  )}
                </button>
                {togle ? (
                  <>
                    <div className="grid gap-8 md:grid-cols-2">
                      {/* Left Column: Job Information */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-700">
                          Job Information
                        </h2>
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">Job ID:</span>
                            <span className="font-semibold text-black">
                              5769 Sunnybrook
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">
                              Customer Name:
                            </span>
                            <span className="font-semibold text-black">
                              Richard
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">
                              Job Status:
                            </span>
                            <span className="font-semibold text-black">
                              None
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">
                              Bill To:
                            </span>
                            <span className="font-semibold text-black">
                              Mag Outman
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">
                              Address:
                            </span>
                            <span className="font-semibold text-black">
                              5769 Sunnybrook Circle Mannerist MN 55345
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Contact Information */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700">
                          Contact Information
                        </h3>
                        <div className="mt-4 space-y-2 text-sm text-gray-600">
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">Mobile:</span>
                            <span className="font-semibold text-black">
                              585-330-3923
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">Email:</span>
                            <span className="font-semibold text-black">
                              john@gmail.com
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span className="text-sm font-medium">
                              Assigned To:
                            </span>
                            <div className="flex justify-end gap-3">
                              <div>
                                <span>Lead Labor</span>
                                <Select
                                  showSearch
                                  style={{ width: '100%' }}
                                  large
                                  className=""
                                  placeholder="Search to Select"
                                  optionFilterProp="label"
                                  filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '')
                                      .toLowerCase()
                                      .localeCompare(
                                        (optionB?.label ?? '').toLowerCase()
                                      )
                                  }
                                  options={[
                                    {
                                      value: '1',
                                      label: 'Jack',
                                    },
                                    {
                                      value: '2',
                                      label: 'Liam',
                                    },
                                    {
                                      value: '3',
                                      label: 'Noah',
                                    },
                                    {
                                      value: '4',
                                      label: 'Lucas',
                                    },
                                    {
                                      value: '5',
                                      label: 'William',
                                    },
                                    {
                                      value: '6',
                                      label: 'Ethan',
                                    },
                                  ]}
                                />
                              </div>
                              <div>
                                <span>Labor</span>
                                <Select
                                  showSearch
                                  style={{ width: '100%' }}
                                  large
                                  className=""
                                  placeholder="Search to Select"
                                  optionFilterProp="label"
                                  filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '')
                                      .toLowerCase()
                                      .localeCompare(
                                        (optionB?.label ?? '').toLowerCase()
                                      )
                                  }
                                  options={[
                                    {
                                      value: '1',
                                      label: 'Cooper',
                                    },
                                    {
                                      value: '2',
                                      label: 'Hudson',
                                    },
                                    {
                                      value: '3',
                                      label: 'Archie',
                                    },
                                    {
                                      value: '4',
                                      label: 'Mason',
                                    },
                                    {
                                      value: '5',
                                      label: 'Hunter',
                                    },
                                    {
                                      value: '6',
                                      label: 'Xavier',
                                    },
                                  ]}
                                />
                              </div>
                            </div>
                          </p>
                          <p className="flex justify-between">
                            <span>Invoice Status:</span>
                            <span className="rounded-full border-[1.5px] p-1 px-2 font-semibold text-yellow-500">
                              Pending
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-700">
                          Job Information
                        </h2>
                      </div>
                      <div>
                        <div className="text-gray-600">
                          <p className="flex items-center justify-end gap-3">
                            <span className="text-sm font-semibold">
                              Job ID:
                            </span>
                            <span class="text-sm font-medium">
                              5769 Sunnybrook
                            </span>
                          </p>
                          <p className="flex items-center justify-end gap-3">
                            <span className="text-sm font-semibold">
                              Customer Name:
                            </span>
                            <span class="text-sm font-medium">Richard </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Button Section */}
              </div>
              <div className="rounded-lg bg-white p-2 shadow-md md:p-4">
                <div className="mb-4 border-b border-gray-300">
                  <ul className="flex items-center overflow-y-auto">
                    <li
                      className={`min-w-[150px] cursor-pointer px-4 py-2 text-center ${
                        activeTab === 'transactions'
                          ? 'border-b-2 border-blue-500 text-blue-500'
                          : 'text-gray-600 hover:text-blue-500'
                      }`}
                      onClick={() => showTab('transactions')}
                    >
                      Transactions
                    </li>

                    <li
                      className={`min-w-[150px] cursor-pointer px-4 py-2 text-center ${
                        activeTab === 'notes'
                          ? 'border-b-2 border-blue-500 text-blue-500'
                          : 'text-gray-600 hover:text-blue-500'
                      }`}
                      onClick={() => showTab('notes')}
                    >
                      Notes
                    </li>
                    <li
                      className={`min-w-[150px] cursor-pointer px-4 py-2 text-center ${
                        activeTab === 'sentEmail'
                          ? 'border-b-2 border-blue-500 text-blue-500'
                          : 'text-gray-600 hover:text-blue-500'
                      }`}
                      onClick={() => showTab('sentEmail')}
                    >
                      Sent Email
                    </li>
                  </ul>
                </div>
                <div className={activeTab === 'transactions' ? '' : 'hidden'}>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                      <thead>
                        <tr className="!bg-white">
                          <th className="w-1/4 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Title
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Type
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Num
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Date
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Account
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Memo
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            P.O Number
                          </th>
                          <th className="w-1/6 px-4 py-2 text-left text-sm font-semibold text-gray-700">
                            Open Balance
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((item, index) => (
                          <tr
                            key={index}
                            className="cursor-pointer hover:bg-gray-100"
                            onClick={() => handleRowClick(item.title)}
                          >
                            <td className="min-w-[160px] px-4 py-2 text-sm text-gray-700 md:w-auto">
                              {item.title}
                            </td>
                            <td className="w-1/6 px-4 py-2 text-sm text-gray-700">
                              {item.type}
                            </td>
                            <td className="w-1/6 px-4 py-2 text-sm text-gray-700">
                              {item.num}
                            </td>
                            <td className="w-1/6 px-4 py-2 text-sm text-gray-700">
                              {item.date}
                            </td>
                            <td className="min-w-[160px] px-4 py-2 text-sm text-gray-700 md:w-auto">
                              {item.account}
                            </td>
                            <td className="min-w-[260px] px-4 py-2 text-sm text-gray-700">
                              {item.memo}
                            </td>
                            <td className="min-w-[140px] px-4 py-2 text-sm text-gray-700">
                              {item.poNumber}
                            </td>
                            <td className="min-w-[130px] px-4 py-2 text-sm text-gray-700 md:w-auto">
                              {item.openBalance}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={activeTab === 'contacts' ? '' : 'hidden'}>
                  <p className="text-center text-gray-700">Contacts Data</p>
                  {/* Add your content for the Contacts tab */}
                </div>

                <div className={activeTab === 'notes' ? '' : 'hidden'}>
                  <form onSubmit={noteData}>
                    <textarea
                      onChange={(e) => setTextAreaData(e.target.value)}
                      value={textAreaData}
                      rows={6}
                      className="h-full w-full rounded-lg border border-gray-300 py-2 pr-4 pl-3 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
                      placeholder="Enter Your Messages"
                    />
                    <Button
                      uibutton="Verify"
                      ButtonUi="rounded-full bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600 w-fit my-2"
                      PositionBtn="justify-end"
                    />
                  </form>
                </div>

                <div className={activeTab === 'sentEmail' ? '' : 'hidden'}>
                  <p className="text-center text-gray-700">Sent Emails Data</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>invoice popop in procress </div>
        </>
      )}
    </>
  );
};
export default JobsInvoice;
