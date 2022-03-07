import React from 'react'
import { Select } from 'antd'
import { useDispatch } from "react-redux";
import { CATEGORIES } from "../option-data-config";
import { CategoryOnChange } from '../../../united-states/actions'

const { Option } = Select

export default function Categories() {
  const dispatcher = useDispatch()
  return (
    <Select
      placeholder="Select a category"
      size="large"
      className="select"
      onChange={() => dispatcher(CategoryOnChange('20'))}
    >
      {CATEGORIES.map((option, index) => {
        return (
          <Option key={index} value={option.value}>
            {option.text}
          </Option>
        );
      })}
    </Select>
  );
}
