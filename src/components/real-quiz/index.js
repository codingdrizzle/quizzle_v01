import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Typography, Button } from "antd";
import { NextQuestion } from "../../united-states/actions";
import CardHeader from "./card-header";
// import _ from 'lodash'
// import { HalfWayFab } from '../../styled-components/half-way-fab'
// import { FaQuestion } from 'react-icons/fa'

export default function Quiz() {

    const data = useSelector((state) => state.FetchData);
  const NumberOfQuestions = useSelector((state) => state.NumberOfQuestions);
  const current_question = useSelector((state) => state.NewQuestion);
    const [render, Rerender ] = useState(data[current_question].question)
     console.log(current_question)
     console.log(NumberOfQuestions)
  const nextQuestion = useDispatch()
  

  const next = () => {
    if (current_question < NumberOfQuestions) {
      nextQuestion(NextQuestion())
      Rerender(data[current_question].question);
    }
  };
  console.log(data[current_question])
  return (
    <Row gutter={[0, 0]} align="middle" justify="center">
      <Col xs={20} md={20} lg={13}>
        <Card>
          <CardHeader />
          <Row gutter={[0, 0]} align="middle" justify="center">
            <Col span={20}>
              {render}
              {/* <Row gutter={[10, 20]} align="middle" justify="center"></Row> */}
              <br />
              <Button onClick={next}>Next Question</Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
