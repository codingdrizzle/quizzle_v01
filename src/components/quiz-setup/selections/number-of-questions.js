import React from 'react'
import { Select } from 'antd'
import { AMOUNT_OF_QUESTIONS } from '../option-data-config';
 
const { Option } = Select

export default function NumberOfQuestions() {
  return (
    <Select
      placeholder="Number of Questions"
      size={"large"}
      className="select"
    >
      {AMOUNT_OF_QUESTIONS.map((option, index) => {
        return (
          <Option key={index} value={option}>
            {option}
          </Option>
        );
      })}
    </Select>
  );
}
