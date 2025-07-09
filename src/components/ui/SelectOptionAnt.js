// pages/index.js

import React from 'react'
import { Select } from 'antd'
import Image from 'next/image'
import { MdOutlineSortByAlpha } from "react-icons/md";

const { Option } = Select

const onChange = value => console.log(`Selected ${value}`)
const onSearch = value => console.log('Search query:', value)

const SelectOptionAnt = ({ FilterInpur }) => {
  const isSortBy = FilterInpur === 'Sort By'

  return (
    <div className="md:p-2">
      <Select
        showSearch
        placeholder={FilterInpur}

        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        className="md:w-40 w-24 p-3 !h-10"                 
        suffixIcon={
          isSortBy
            ? <MdOutlineSortByAlpha size={20} />
            : undefined
        }
      >
        <Option value="jack" label="Jack">Jack</Option>
        <Option value="lucy" label="Lucy">Lucy</Option>
        <Option value="tom" label="Tom">Tom</Option>
      </Select>
    </div>
  )
}

export default SelectOptionAnt
