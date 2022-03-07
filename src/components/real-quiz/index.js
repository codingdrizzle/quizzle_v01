import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Typography, Button } from 'antd'
import axios from 'axios'
import _ from 'lodash'
import { CardHead, QuestionNumber, TimeBox, TimerText, TimerSec } from '../../styled-components/card-head'
// import { HalfWayFab } from '../../styled-components/half-way-fab'
import { FaQuestion } from 'react-icons/fa'

export default function Quiz(){

    // let [ index, setIndex ] = useState(0)
    // const [ Questions, setQuestions] = useState([])
    // const [question, setQuestion ] = useState('')
    // const [answers, setAnswers ] = useState([])
    //     const { numberOfQuestions, categories, difficulty, questionType } = props.data
    //     const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categories}&difficulty=${difficulty}&type=${questionType}`
        
    //     useEffect(() => {
    //         const fetchData = () => {
    //             axios.get(url)
    //         .then(response => {
    //             setQuestions([...response.data.results])
    //         })
    //         .catch(err => {console.log(err)})
    //     }
    //     fetchData();
    // },[]);
    // const rePaint = () => {
        
    //     while(index<Questions.length){
    //         const correct_answer = Questions[index].correct_answer
    //         setQuestion(Questions[index].question)
    //         setAnswers([correct_answer, ...Questions[index].incorrect_answers])

    //        const shuffledAnswers =  _.shuffle(answers)
    //        console.log(shuffledAnswers)

    //     }
    //     console.log(Questions)
    // }
    // function next(){setIndex(index++)}
    return(
            <Row gutter={[0,0]} align='middle' justify='center'>
                <Col xs={20} md={20} lg={13}>
                    <Card>
                        <Row gutter={[0,0]} align='middle' justify='center'>
                            <Col span={20}>
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
            <Row gutter={[0,0]} align='middle' justify='center'>
                <Col span={20}>
                    <Row gutter={[10,20]} align='middle' justify='center'>
                        {/* {question} */}
                        <hr /><hr />

                        {/* {answers} */}
                        {/* {Questions.map((item, index) => {
                            return (<p key={index}>Hello all {item.question}</p>)
                        })} */}
                    </Row>
                    <Button>Next Question</Button>
                </Col>
            </Row>
                    </Card>
                </Col>
            </Row>
    )
}