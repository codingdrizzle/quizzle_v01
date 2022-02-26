import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "../src/united-states/store";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
