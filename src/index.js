import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 라우터 router 셋팅
// 1. npm install react-router-dom
// 2. import { BrowserRouter } from "react-router-dom";
// 3. <App /> 을 <BrowserRouter>로 감싸기.
// BrowserRouter VS HashRouter
// hash : 라우팅 안전하게 할 수 있게 도와줌.
// hash : '/#'이 붙는데 URL에 '#'이 포함되어 있을 경우 서버에 전달되지 않는다. 즉 서버통신을 안하고 리엑트에서
//        그래서 해시라우팅은 리액트가 알아서 잘 해줄 수 있다.
// BrowserRouter : 라우팅을 리액트가 아니라 서버에게 요청 할 수도 있어서 위험.

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
