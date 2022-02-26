import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.min.css'
import AppLayout from './components/app-layout'
import QuizSetup from './components/quiz-setup'
import Start from './commons/start'
import Quiz from './components/real-quiz'

function App() {
  const loaded = useSelector(state => state.loaded)
  console.log(loaded)

    return (
      /* <GlobalStyles/> */
      !loaded ? <Start/> :
      <AppLayout className='fade'>   
        <QuizSetup/>
      </AppLayout>
  );
}

export default App;