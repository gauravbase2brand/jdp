import { SiGooglemaps } from 'react-icons/si';
import { DatePicker, Space } from 'antd';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import Input from '../ui/InputFiels';
import InputCustom from '../ui/InputFiels';
import { Radio } from 'antd';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '../ui/Button';
const ContractBasedJob = ({ value, size }) => {
  const { RangePicker } = DatePicker;
  const [value, setValue] = useState(''); // Set default selected value
  const [size, setSize] = useState('large');
  const [redioSelect, setredioSelect] = useState(1);

  const onRadioChange = (e) => {
    setredioSelect(e.target.value);
  };
  return (
    <div className="">
      <h3 className="mb-2 text-left text-xl font-semibold">
        {value === 'ContractBased' ? 'Contract Based Job' : 'Service Based Job'}
      </h3>

      <form>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Select Contractor <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-10"
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Benjamin',
                },
                {
                  value: '2',
                  label: 'James',
                },
                {
                  value: '3',
                  label: 'Alexander',
                },
                {
                  value: '4',
                  label: 'Samuel',
                },
                {
                  value: '5',
                  label: 'Thomas',
                },
                {
                  value: '6',
                  label: 'Matthew',
                },
              ]}
            />
          </div>
          <div>
            <InputCustom
              InputType="text"
              placeholder="Enter job id."
              InputLabl="Job Id."
              isRequiredLabel={true}
            />
          </div>
          <div>
            <InputCustom
              InputType="text"
              placeholder="Enter job title"
              InputLabl="Job Title"
              isRequiredLabel={true}
            />
          </div>
          <div>
            <span className="mb-1 block text-sm font-medium text-gray-700">
              Billing Status <span className="text-red-500">*</span>
            </span>
            <Select
              showSearch
              style={{ width: '100%' }}
              large
              className="!h-10 placeholder-amber-200"
              placeholder="Enter billing status"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Billable',
                },
                {
                  value: '2',
                  label: 'Non billable',
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-3">
          <div>
            <InputCustom
              InputType="url"
              placeholder="Enter address"
              InputLabl="Address"
              isRequiredLabel={true}
              icon2={<SiGooglemaps />}
            />
          </div>
        </div>
        <div>
          <div className="mt-3 mb-6 grid grid-cols-2 gap-3">
            <div>
              <span className="mb-1 block text-sm font-medium text-gray-700">
                Job Description <spam className="text-red-500">*</spam>
              </span>
              <textarea
                className="h-full w-full rounded-lg border border-gray-300 py-2 pr-4 pl-3 text-gray-700 placeholder-gray-400 transition duration-200 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter message"
              ></textarea>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Warranty <spam className="text-red-500">*</spam>
                </span>
                <Radio.Group
                  name="radiogroup"
                  onChange={onRadioChange}
                  defaultValue={1}
                  options={[
                    { value: 1, label: 'Yes', style: { fontSize: '1rem' } },
                    { value: 2, label: 'No', style: { fontSize: '1rem' } },
                  ]}
                />
              </div>
              {redioSelect == 1 && (
                <>
                  <div>
                    <RangePicker size={size}></RangePicker>
                  </div>
                </>
              )}

              <div>
                <span className="mb-1 block text-sm font-medium text-gray-700">
                  Job Completion Status <spam className="text-red-500">*</spam>
                </span>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  large
                  className="!h-10"
                  placeholder="Search to Select"
                  optionFilterProp="label"
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '')
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'Assigned',
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
                      label: 'Pending',
                    },
                    {
                      value: '5',
                      label: 'Delayed',
                    },
                    {
                      value: '6',
                      label: 'Completed',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContractBasedJob;