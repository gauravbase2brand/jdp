import { SiGooglemaps } from 'react-icons/si';
import { DatePicker, Input, TimePicker } from 'antd';
import React, { useState } from 'react';
import { Select } from 'antd';
import InputCustom from '../ui/InputFiels';
import { Radio } from 'antd';
const ServiceBasedJob = ({}) => {
  const { RangePicker } = DatePicker;
  const [value, setValue] = useState(''); // Set default selected value
  const [redioSelect, setredioSelect] = useState(1);

  const onRadioChange = (e) => {
    setredioSelect(e.target.value);
  };
  return (
    <div className="">
      <h3 className="mb-2 text-left text-xl font-semibold">
        Service Based Job
      </h3>

      <form>
        <div className="grid grid-cols-2 items-end gap-2">
          <div>
              <label className="text-sm text-gray-600 mb-2">Job Id.<span className="text-red-500">*</span></label>
          <Input size="large" placeholder="Enter job id." type='text' style={{ borderRadius: '10px'}} />
          </div>

        
        
     
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Billing Status <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-10"
              placeholder="Select billing status"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Completed',
                },
                {
                  value: '2',
                  label: 'Completed',
                },
                {
                  value: '3',
                  label: 'Delayed',
                },
                {
                  value: '4',
                  label: 'Delayed',
                },
                {
                  value: '5',
                  label: 'Pending',
                },
                {
                  value: '6',
                  label: 'Pending',
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div>
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Labor Assigned <span className="text-red-500">*</span>
              </span>
              <Select
                showSearch
                style={{ width: '100%' }}
                large
                className="!h-10"
                placeholder="Select labor"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    value: '1',
                    label: ' Don Benjamin',
                  },
                  {
                    value: '2',
                    label: 'Robod',
                  },
                  {
                    value: '3',
                    label: 'Alexander',
                  },
                  {
                    value: '4',
                    label: 'Marcus',
                  },
                  {
                    value: '5',
                    label: 'Thomas',
                  },
                  {
                    value: '6',
                    label: 'Alen',
                  },
                ]}
              />
            </div>
            <div>
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Date Assigned <span className="text-red-500">*</span>
              </span>

              <DatePicker
                size="large"
                style={{ width: '100%', borderRadius: '10px' }}
                placeholder="Enter date"
              />
            </div>
          </div>

          <div className="h-full">
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Job Description <spam className="text-red-500">*</spam>
            </span>
            <textarea
              className="h-[100px] w-full rounded-lg border border-gray-300 py-2 pr-4 pl-3 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter message"
            ></textarea>
          </div>
          <div className="">
            <div>
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Assigned To <span className="text-red-500">*</span>
              </span>
              <Select
                showSearch
                style={{ width: '100%' }}
                large
                className="!h-10"
                placeholder="Select Lead Labor"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    value: '1',
                    label: ' Don Benjamin',
                  },
                  {
                    value: '2',
                    label: 'Robod',
                  },
                  {
                    value: '3',
                    label: 'Alexander',
                  },
                  {
                    value: '4',
                    label: 'Marcus',
                  },
                  {
                    value: '5',
                    label: 'Thomas',
                  },
                  {
                    value: '6',
                    label: 'Alen',
                  },
                ]}
              />
            </div>
          </div>

          <div>
            <Select
              showSearch
              style={{ width: '100%' }}
              size="large"
              placeholder="Select labor"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: ' Don Benjamin',
                },
                {
                  value: '2',
                  label: 'Robod',
                },
                {
                  value: '3',
                  label: 'Alexander',
                },
                {
                  value: '4',
                  label: 'Marcus',
                },
                {
                  value: '5',
                  label: 'Thomas',
                },
                {
                  value: '6',
                  label: 'Alen',
                },
              ]}
            />
          </div>
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Due Date <span className="text-red-500">*</span>
            </span>

            <DatePicker
              size="large"
              style={{ width: '100%', borderRadius: '10px' }}
              placeholder="Enter due date"
            />
          </div>

       
           <div>
              <label className="text-sm text-gray-600 mb-2">Address<span className="text-red-500">*</span></label>
          <Input size="large" placeholder="Enter address" type='url' style={{ borderRadius: '10px'}} />
          </div>
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Time Logs (Optional) <span className="text-red-500">*</span>
            </span>

            <TimePicker
              placeholder="00.00"
              style={{ width: '100%', borderRadius: '10px' }}
              size="large"
            />
          </div>

          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
           Completion Status <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              size="large"
              placeholder="Completion Status"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                   {
                  value: '1',
                  label: 'Completed',
                },
                {
                  value: '2',
                  label: 'Completed',
                },
                {
                  value: '3',
                  label: 'Delayed',
                },
                {
                  value: '4',
                  label: 'Delayed',
                },
                {
                  value: '5',
                  label: 'Pending',
                },
                {
                  value: '6',
                  label: 'Pending',
                },
              ]}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ServiceBasedJob;
