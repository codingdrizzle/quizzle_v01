import React from 'react'
import { Select } from 'antd'
import { TYPE_OF_QUESTION } from '../option-data-config'

const { Option } = Select

export default function QuestionType() {
  return (
    <Select
      placeholder="Choose type of question to answer"
      size="large"
      className="select"
    >
      {TYPE_OF_QUESTION.map((option, index) => {
        console.log(option);
        return (
          <Option key={index} value={option.value}>
            {option.text}
          </Option>
        );
      })}
    </Select>
  );
}
