import React, { useRef } from 'react'
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { TypeOnChange } from '../../../united-states/actions'
import { TYPE_OF_QUESTION } from '../option-data-config'

const { Option } = Select

export default function QuestionType() {
  const watchCurrent = useRef(null)
  const dispatcher = useDispatch()
  const selector = useSelector(state =>  state.Category)
  const handleChange = e => {
    console.log(e.target.value)
    dispatcher(TypeOnChange(e.target.value));
  }
  // console.log(watchCurrent.current.value);
  return (
    <Select
      placeholder="Choose type of question to answer"
      size="large"
      className="select"
      value={selector}
      onChange={handleChange}
      ref={watchCurrent}
    >
      {TYPE_OF_QUESTION.map((option, index) => {
        return (
          <Option key={index} value={option.value}>
            {option.text}
          </Option>
        );
      })}
    </Select>
  );
}
