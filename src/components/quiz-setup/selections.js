import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button } from "antd";
import { ShowRules } from "../../united-states/actions";
import Categories from "./selections/categories";
import NumberOfQuestions from "./selections/number-of-questions";
import DifficultyLevel from "./selections/difficulty-level";
import QuestionType from "./selections/question-type";
import "../../styled-components/selection-css/index.css";

export default function Selections() {
  const Rule = useDispatch();
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
              onClick={() => Rule(ShowRules())}
            >
              Take Quiz
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
