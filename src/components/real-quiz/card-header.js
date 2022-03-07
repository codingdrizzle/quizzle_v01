import React from "react";
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
`;

export default function CardHeader() {
  return (
    <Row gutter={[0, 0]} align="middle" justify="center" style={{marginBottom: 30}}>
      <Col span={24}>
        <CardHeaderStyles />
        <CardHead>
          <QuestionNumber>
            {/* <HalfWayFab><FaQuestion size={'1em'}/></HalfWayFab> */}
            Question Number 1
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
