import React, { useRef, useState } from "react";
import { Row, Col, Card, List, Select, Button } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { rules } from "../../commons/rules-list";
import { RiCheckDoubleLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import Quiz from "../real-quiz";
import Categories from './selections/categories'
import NumberOfQuestions from "./selections/number-of-questions"
import DifficultyLevel from "./selections/difficulty-level"
import QuestionType from "./selections/question-type";

import "../../styled-components/selection-css/index.css";

const { Option } = Select;
export default function Selections() {
  const numQue = useRef(null);
  const category = useRef(null);
  const diff = useRef(null);
  const queType = useRef(null);

  const [numQuestions, setNumQuestions] = useState("10");
  const [categories, setCategories] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [show, setShow] = useState("0");
  const handleChange = () => {
    setNumQuestions(numQue.current.value);
    setCategories(category.current.value);
    setDifficulty(diff.current.value);
    setType(queType.current.value);

    console.log(numQuestions);
    console.log(categories);
    console.log(difficulty);
    console.log(type);
  };
  const showRules = () => {
    setShow("1");
  };
  const hideRules = () => {
    setShow("0");
  };
  const data = "";
  const startQuiz = () => {
    data = {
      numberOfQuestions: numQue.current.value,
      categories: category.current.value,
      difficulty: diff.current.value,
      questionType: queType.current.value,
    };
  };
  return (
    <>
      <Routes>
        <Route
          path={"/"}
          exact
          element={
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
                    <NumberOfQuestions/>
                  </div>
                </Col>
                <Col xs={20} md={15} lg={13}>
                  <div align="middle" justify="center">
                    <h2 className="select-title">Categories</h2>
                    <Categories/>
                  </div>
                </Col>
                <Col xs={20} md={15} lg={13}>
                  <div align="middle" justify="center">
                    <h2 className="select-title">Difficulty Level</h2>
                    <DifficultyLevel/>
                  </div>
                </Col>
                <Col xs={20} md={15} lg={13}>
                  <div align="middle" justify="center">
                    <h2 className="select-title">Questions Type</h2>
                    <QuestionType/>
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
                      onClick={showRules}
                    >
                      Take Quiz
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row
                gutter={[10, 10]}
                align="middle"
                justify="center"
                style={{ opacity: show }}
              >
                <Col xs={20} lg={10} className="rules-box">
                  <Card>
                    <div className="rules_list">
                      <div className="close-btn-container">
                        <Button className="close-btn" onClick={hideRules}>
                          <GrFormClose className="close-icon" />
                        </Button>
                      </div>
                      <List
                        size="large"
                        header={
                          <div className="rules-header">Rules of the Quiz</div>
                        }
                        dataSource={rules}
                        renderItem={(item) => (
                          <List.Item>
                            <RiCheckDoubleLine /> {item}
                          </List.Item>
                        )}
                        footer={<div className="rules-footer">GOOD LUCK!</div>}
                      />
                    </div>
                    <Link to={"/quiz"}>
                      <Button onClick={startQuiz}>Let Go</Button>
                    </Link>
                  </Card>
                </Col>
              </Row>
            </>
          }
        />
        <Route path="/quiz" exact element={<Quiz data={data} />} />
      </Routes>
    </>
  );
}
