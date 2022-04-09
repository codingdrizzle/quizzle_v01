import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Typography, Button, List } from "antd";
import { NextQuestion, Score, ResetTimer, StartTimer } from "../../united-states/actions";
import CardHeader from "./card-header";
import "../../styled-components/quiz-page-css/index.css";
import _ from "lodash";
// import { HalfWayFab } from '../../styled-components/half-way-fab'
// import { FaQuestion } from 'react-icons/fa'
import { FaCheck, FaTimes } from "react-icons/fa";

export default function Quiz() {
  // Refs
  const answer = useRef(null)

  // icons
  let tickIcon = '<p className="status-icon status-icon-check"><FaCheck /></p>'
  let crossIcon = '<p className="status-icon status-icon-times"><FaTimes /></p>'


  // Redus store selectors
  const data = useSelector((state) => state.FetchData);
  const NumberOfQuestions = useSelector((state) => state.NumberOfQuestions);
  const current_question = useSelector((state) => state.NewQuestion);
  const score = useSelector((state) => state.Score)
  
  //   Redux store dispatchers
  const dispatch = useDispatch();

  // StartTimer on component load
  useEffect(() => dispatch(StartTimer()),[dispatch])

  const answers = _.shuffle([
    ...data[current_question].incorrect_answers,
    data[current_question].correct_answer,
  ]);
  const correct_answer = answers.indexOf(data[current_question].correct_answer);
  
  const next = (counter) => {
    if (current_question < NumberOfQuestions) {
      dispatch(NextQuestion());
    }
    dispatch(ResetTimer());
  };
  console.log(data[current_question]);

  console.log(
    data[current_question].correct_answer + " is at index " + correct_answer
  );

  const Checker = (e) => {
    const clicked_answer = answers.indexOf(e.target.innerText);
    if (clicked_answer === correct_answer) {
      dispatch(Score())
      answer.current.insertAdjacentHTML("beforeend", tickIcon)
      console.log("Yes, it is correct!!!");
    }
  };


  return (
    <Row gutter={[0, 0]} align="middle" justify="center">
      <Col xs={20} md={20} lg={13}>
        <Card>
          <CardHeader questionNumber={current_question + 1} timerReset={next}/>
          <Row gutter={[0, 0]} align="middle" justify="center">
            <Col span={20}>
              <h2 className="que_text">{data[current_question].question}</h2>
              <List
                className="answer-list"
                size="large"
                dataSource={[...answers]}
                renderItem={(item) => (
                  <List.Item className="answer-list-item" onClick={Checker}>
                    <p className="answer" ref={answer}>
                      <span>{item}</span>
                      <span>icon</span>
                    </p>
                  </List.Item>
                )}
              />
              <div className="quiz-footer">
                <div className="total-que">
                  <span>
                    <p>{current_question + 1}</p>of<p>{NumberOfQuestions}</p>
                    Questions
                  </span>
                  <span>
                    <p>Score: {score}</p>
                  </span>
                </div>
                <Button className="next-btn" onClick={next}>
                  Next Question
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
