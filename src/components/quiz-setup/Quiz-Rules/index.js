import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Row, Col, Card, Button, List } from "antd";
import { RiCheckDoubleLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { HideRules, ShowQuiz, FetchData } from "../../../united-states/actions";
import { RULES_LIST } from "./rules-list";

const Rules = ({ display }) => {
  // Redux store selectors
  const number_of_questions = useSelector((state) => state.NumberOfQuestions);
  const difficulty = useSelector((state) => state.Difficulty);
  const category = useSelector((state) => state.Category);
  const quiz_type = useSelector((state) => state.QuizType);

  // Redux store dispatchers
  const Rule = useDispatch();
  const renderQuizPage = useDispatch();
  const setData = useDispatch();

  // fetch URL composition
  const url = `https://opentdb.com/api.php?amount=${number_of_questions}&category=${category}&difficulty=${difficulty}&type=${quiz_type}`;

  // Funtion to fetch data and to render the quiz-page
  const RenderAndFetch = () => {
    axios
      .get(url) //making a GET Http request
      // if successful, retrieve data
      .then((response) => {
        //  updating redux store
        setData(FetchData(response.data.results));
      })
      // handle if any error
      .catch((err) => {
        console.log(err);
      });

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
            <Button className="footer-btn start-quiz" onClick={RenderAndFetch}>Start Quiz</Button>
            <Button className="footer-btn return" onClick={() => Rule(HideRules())}>Reurn</Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Rules;
