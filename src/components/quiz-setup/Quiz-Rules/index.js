import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Button, List } from "antd";
import { RiCheckDoubleLine } from "react-icons/ri";
import { HideRules, ShowQuiz } from "../../../united-states/actions";
import { RULES_LIST } from "./rules-list";

const Rules = ({ display }) => {
  // Redux store dispatchers
  const Rule = useDispatch();
  const renderQuizPage = useDispatch();


  // Funtion to fetch data and to render the quiz-page
  const Render = () => {
    // Render quiz-page
    renderQuizPage(ShowQuiz());
  };

  return (
    <Row
      gutter={[10, 10]}
      align="middle"
      justify="center"
      style={{ visibility: display }}
      className="wrapper"
    >
      <Col xs={20} lg={10}>
        <div className="rules-box">
          <div className="rules_list">
            <List
              size="large"
              header={<div className="rules-header-text">Rules of the Quiz</div>}
              dataSource={RULES_LIST}
              renderItem={(item) => (
                <List.Item>
                  <RiCheckDoubleLine /> {item}
                </List.Item>
              )}
              footer={<div className="rules-footer">GOOD LUCK!</div>}
            />
          </div>
          <div className="footer-buttons">
            <Button className="footer-btn start-quiz" onClick={Render}>Start Quiz</Button>
            <Button className="footer-btn return" onClick={() => Rule(HideRules())}>Return</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Rules;
