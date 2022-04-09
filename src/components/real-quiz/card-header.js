import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { createGlobalStyle } from "styled-components";
import {
  CardHead,
  QuestionNumber,
  TimeBox,
  TimerText,
  TimerSec,
} from "../../styled-components/card-head";

const CardHeaderStyles = createGlobalStyle`
    .ant-card-body{
        padding:0;
        padding-bottom: 40px;
    }
`

export default function CardHeader({ questionNumber, timerReset }) {
  const TimeValue = useSelector(state => state.Timer)
  const [timeCount, setTimeCount]  = useState(15)

  // useEffect(()=>{
    // setTimeCount(TimeValue)  
  // },[]);  
 
  return (
    <Row
      gutter={[0, 0]}
      align="middle"
      justify="center"
      style={{ marginBottom: 30 }}
    >
      <Col span={24}>
        <CardHeaderStyles />
        <CardHead>
          <QuestionNumber>
            {/* <HalfWayFab><FaQuestion size={'1em'}/></HalfWayFab> */}
            Question {questionNumber}
          </QuestionNumber>
          <TimeBox>
            <TimerText>Time Left</TimerText>
            <TimerSec>15</TimerSec>
          </TimeBox>
        </CardHead>
      </Col>
    </Row>
  );
}
