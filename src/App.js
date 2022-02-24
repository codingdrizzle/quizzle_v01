import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import AppLayout from './components/app-layout'
import QuizSetup from './components/quiz-setup'
import Start from './commons/start'
import Quiz from './components/real-quiz'

function App() {
  // const [loading, setLoading] = useState(false);
  // const [isReady, setIsReady] = useState(true);
  // const letsGo = () => {
  //   setLoading(!loading)
  //   setTimeout(()=> setIsReady(!isReady), 3000)
  // }
  return (
    <>
      {/* <GlobalStyles/> */}
      {/* {isReady ? <Start load={loading} letsGo={letsGo}/> : */}
      <AppLayout className='fade'>
        <QuizSetup/>
      </AppLayout>
       {/* }  */}
    </>
  );
}

export default App;