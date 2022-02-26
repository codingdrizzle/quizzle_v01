import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isLoaded } from "../united-states/actions";
import { Button, Progress } from "antd";
import { createGlobalStyle } from "styled-components";

const StartStyles = createGlobalStyle`
    .landing{
        width: 100%;
        height: 100vh;
        background: rgb(0, 20, 40);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .start{
        color: #fff;
        background: rgb(0, 20, 40);
        font-size: 25px;
        padding: 15px 30px;
        height: 70px;
        max-height: 100px;
        font-weight: 700px;
        outline: none;
        border: 1px solid #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.8s ease;
        overflow: hidden !important;
    }
    .start:hover{
        color: rgb(0, 20, 40);
        background: #fff;
        border: none
    }
`;
export default function Start(props) {
  const [text, setText] = useState("START");
  const [ timer, setTimer] = useState(10)
  const setLoader = useDispatch();
  const starter = () => {
      setInterval(setTimer(timer+15),1000)
      setText(
      <Progress
        type="line"
        steps={6}
        strokeColor="#1976D2"
        percent={timer}
        size="small"
        status="active"
        showInfo={true}
      />
    );
    setTimeout(() => setLoader(isLoaded()), 6000);
  };

  return (
    <>
      <StartStyles />
      <div className="landing">
        <Button onClick={starter} className="start" size="large">
          &nbsp; {text}
        </Button>
      </div>
    </>
  );
}
