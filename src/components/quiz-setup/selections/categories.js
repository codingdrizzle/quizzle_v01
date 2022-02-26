import React from 'react'
import { Select } from 'antd'
import { CATEGORIES } from "../option-data-config";

const { Option } = Select

export default function Categories() {
  return (
    <Select
      placeholder="Select a category"
      size="large"
      className="select"
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
