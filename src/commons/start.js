import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isLoaded } from "../united-states/actions";
import { Button, Spin } from "antd";
import '../styled-components/start-screen-css/index.css'

export default function Start(props) {
  const [clicked, isClicked] = useState(false);
  const setLoader = useDispatch();
  const starter = () => {
      isClicked(prev => !prev)
    setTimeout(() => setLoader(isLoaded()), 0);
  };

  return (
    <>
      <div className="landing">
        {!clicked ? (
          <Button onClick={starter} className="start" size="large">
            START
          </Button>
        ) : (
          <Spin size="large"/>
        )}
      </div>
    </>
  );
}
