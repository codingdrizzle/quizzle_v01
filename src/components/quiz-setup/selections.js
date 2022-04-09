import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { Row, Col, Button } from "antd";
import { ShowRules, FetchData } from "../../united-states/actions";
import Categories from "./selections/categories";
import NumberOfQuestions from "./selections/number-of-questions";
import DifficultyLevel from "./selections/difficulty-level";
import QuestionType from "./selections/question-type";
import "../../styled-components/selection-css/index.css";

export default function Selections() {
  // Redux store selectors
  const number_of_questions = useSelector((state) => state.NumberOfQuestions);
  const difficulty = useSelector((state) => state.Difficulty);
  const category = useSelector((state) => state.Category);
  const quiz_type = useSelector((state) => state.QuizType);

  // Redux store dispatchers
  const dispatch = useDispatch();

  // fetch URL composition
  const url = `https://opentdb.com/api.php?amount=${number_of_questions}&category=${category}&difficulty=${difficulty}&type=${quiz_type}`;

  const RulesAndFetch = () => {
        axios
          .get(url) //making a GET Http request
          // if successful, retrieve data
          .then((response) => {
            //  updating redux store
            dispatch(FetchData(response.data.results));
          })
          // handle if any error
          .catch((err) => {
            console.log(err);
          });
          dispatch(ShowRules());
  }
  return (
    <>
      <Row
        gutter={[0, 20]}
        align="middle"
        justify="center"
        style={{ marginBottom: 60 }}
      >
        <Col xs={20} md={15} lg={13}>
          <div align="middle" justify="center">
            <h2 className="select-title">Number of Questions</h2>
            <NumberOfQuestions />
          </div>
        </Col>
        <Col xs={20} md={15} lg={13}>
          <div align="middle" justify="center">
            <h2 className="select-title">Categories</h2>
            <Categories />
          </div>
        </Col>
        <Col xs={20} md={15} lg={13}>
          <div align="middle" justify="center">
            <h2 className="select-title">Difficulty Level</h2>
            <DifficultyLevel />
          </div>
        </Col>
        <Col xs={20} md={15} lg={13}>
          <div align="middle" justify="center">
            <h2 className="select-title">Questions Type</h2>
            <QuestionType />
          </div>
        </Col>
      </Row>
      <Row gutter={[0, 0]} align="middle" justify="center">
        <Col xs={12} md={12} lg={10}>
          <div align="middle" justify="center">
            <Button
              className="submit-btn"
              size="large"
              block
              onClick={RulesAndFetch}
            >
              Take Quiz
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
