import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Selections from "./selections";
import Rules from "./Quiz-Rules";
import Quiz from "../real-quiz";

export default function QuizSetup() {
  const display = useSelector((state) => state.ShowRules);
  const renderQuizPage = useSelector((state) => state.ShowQuiz);

  return !renderQuizPage ? (
    <>
      <Selections/>
      <Rules display={display} />
    </>
  ) : (
    <Quiz />    
  ) 

}
