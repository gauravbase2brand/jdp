// pages/index.js

import React from 'react'
import { Select } from 'antd'
import Image from 'next/image'
import { MdOutlineSortByAlpha } from "react-icons/md";

const { Option } = Select

const onChange = value => console.log(`Selected ${value}`)
const onSearch = value => console.log('Search query:', value)

const SelectOptionAnt = ({ FilterInpur }) => {

  return (
    <div className="md:p-1 lg:w-auto w-full">
      <Select
        showSearch
        placeholder={FilterInpur}
size='large'
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        className="lg:w-40 w-full "                 
      
      >
        <Option value="jack" label="Jack">Jack</Option>
        <Option value="lucy" label="Lucy">Lucy</Option>
        <Option value="tom" label="Tom">Tom</Option>
      </Select>
    </div>
  )
}

export default SelectOptionAnt
