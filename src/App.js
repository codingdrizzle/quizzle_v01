import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "antd/dist/antd.min.css";
import AppLayout from "./components/app-layout";
import QuizSetup from "./components/quiz-setup";
import Start from "./commons/start";
import Quiz from "./components/real-quiz";

function App() {
  const loaded = useSelector((state) => state.loaded);
  const renderQuizPage = useSelector((state) => state.ShowQuiz);
  return( 
    
  !loaded ? (<Start />) : (
    <AppLayout className="fade">
      {/* <Switch> */}
        <QuizSetup />
      {/* </Switch> */}
    </AppLayout>
  )
  );
}

export default App;