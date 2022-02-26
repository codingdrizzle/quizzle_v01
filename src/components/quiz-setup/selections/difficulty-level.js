import React from 'react'
import { Select } from 'antd'
import { DIFFICULTY_LEVEL } from '../option-data-config'

const { Option } = Select

export default function DifficultyLevel() {
  return (
    <Select
      placeholder="Choose how difficult"
      size="large"
      className="select"
    >
      {DIFFICULTY_LEVEL.map((option, index) => {
        return (
          <Option key={index} value={option.value}>
            {option.text}
          </Option>
        );
      })}
    </Select>
  );
}
