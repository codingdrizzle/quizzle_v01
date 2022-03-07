import React from 'react';
import { useDispatch } from "react-redux"
import { Row, Col, Card, Button, List  } from 'antd'
import { RiCheckDoubleLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { HideRules, ShowQuiz } from '../../../united-states/actions'
import { RULES_LIST } from './rules-list'


const Rules = ({display}) => {
    const Rule = useDispatch();
    const renderQuizPage = useDispatch()
    return (
      <Row
        gutter={[10, 10]}
        align="middle"
        justify="center"
        style={{ visibility: display }}
      >
        <Col xs={20} lg={10} className="rules-box">
          <Card>
            <div className="rules_list">
              <div
                className="close-btn-container"
                onClick={() => {
                  console.log("Btn clicked");
                  Rule(HideRules());
                }}
              >
                <Button className="close-btn">
                  <GrFormClose className="close-icon" />
                </Button>
              </div>
              <List
                size="large"
                header={<div className="rules-header">Rules of the Quiz</div>}
                dataSource={RULES_LIST}
                renderItem={(item) => (
                  <List.Item>
                    <RiCheckDoubleLine /> {item}
                  </List.Item>
                )}
                footer={<div className="rules-footer">GOOD LUCK!</div>}
              />
            </div>
              <Button onClick={() => renderQuizPage(ShowQuiz())}>Let Go</Button>
          </Card>
        </Col>
      </Row>
    );
}

export default Rules;