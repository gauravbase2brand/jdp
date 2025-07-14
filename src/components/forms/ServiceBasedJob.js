import { SiGooglemaps } from 'react-icons/si';
import { DatePicker, Input, TimePicker } from 'antd';
import React, { useState } from 'react';
import { Select } from 'antd';
import InputCustom from '../ui/InputFiels';
import { Radio } from 'antd';

import TextArea from 'antd/es/input/TextArea';
import AddressFields from '../ui/AddressFields';
import SelectInput from './../ui/SelectInput';
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
            {/* <label className="mb-2 text-sm text-gray-600">
              Job Id.<span className="text-red-500">*</span>
            </label>
            <Input
              size="large"
              placeholder="Enter job id."
              type="text"
              style={{ borderRadius: '10px' }}
            /> */}
            <InputCustom
              placeholder="Enter job id."
              isRequiredLabel={true}
              InputLabl="Job Id"
              InputType="text"
              inputsize="large"
            />
          </div>

          <SelectInput
            showSearch
            style={{ width: '100%' }}
            inputsize="large"
            selectaname="Billing Status"
            IsrequiredSelect={true}
            placeholder="Select billing status"
            optionFilterProp="label"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              { value: '1', label: 'Completed' },
              { value: '2', label: 'Completed' },
              { value: '3', label: 'Delayed' },
              { value: '4', label: 'Delayed' },
              { value: '5', label: 'Pending' },
              { value: '6', label: 'Pending' },
            ]}
          />

          {/* <div>
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
          </div> */}

          <div className="grid grid-cols-1 gap-2">
            <SelectInput
              showSearch
              style={{ width: '100%' }}
              inputsize="large"
              selectaname="Labor Assigned"
              IsrequiredSelect={true}
              InputLabl="Labor Assigned"
              optionFilterProp="label"
              filterOption={(input, option) =>
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                { value: '1', label: 'Don Benjamin' },
                { value: '2', label: 'Robod' },
                { value: '3', label: 'Alexander' },
                { value: '4', label: 'Marcus' },
                { value: '5', label: 'Thomas' },
                { value: '6', label: 'Alen' },
              ]}
            />
            {/* <div>
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
            </div> */}

            <span className="mb-1 block text-sm font-medium text-gray-700">
              Date Assigned <span className="text-red-500">*</span>
            </span>

            <DatePicker
              size="large"
              style={{ width: '100%', borderRadius: '10px' }}
              placeholder="Enter date"
            />
          </div>

          <div className="h-full">
            <AddressFields
              AddressFieldsName="Job Description"
              placeholderText="Enter job description"
              requiredHeight="110px"
            />
          </div>
          <div className="">
            <SelectInput
              showSearch
              style={{ width: '100%' }}
              inputsize="large"
              selectaname="Assigned To"
              IsrequiredSelect={true}
              InputLabl="Assigned To"
              optionFilterProp="label"
              filterOption={(input, option) =>
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                { value: '1', label: 'Don Benjamin' },
                { value: '2', label: 'Robod' },
                { value: '3', label: 'Alexander' },
                { value: '4', label: 'Marcus' },
                { value: '5', label: 'Thomas' },
                { value: '6', label: 'Alen' },
              ]}
            />
            {/* <div>
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
            </div> */}
          </div>

          <div>
            <SelectInput
              style={{ width: '100%' }}
              inputsize="large"
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
            <InputCustom
              placeholder="Enter address"
              isRequiredLabel={true}
              InputLabl="Address"
              InputType="text"
              inputsize="large"
            />
          </div>
          <div className="mb-2">
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
            <SelectInput
              style={{ width: '100%' }}
              inputsize="large"
              selectaname="Completion Status"
              IsrequiredSelect={true}
              InputLabl="Completion Status"
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
