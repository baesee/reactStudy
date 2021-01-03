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

// Redux 쓰는이유
// 1. 여러 컴포넌트가 중첩으로 사용될때 props전송이 번거롭기 때문에
// 2. 데이터 수정이 용이
//  셋팅 , createStore에 값을 세팅하고 , <Provider> 로 원하는 곳 감싸기

// Provider : redux 라는 것을 사용해서 매번 porps해서 컴포넌트마다 값을 던져주는게 아니라
//            createStroe를 사용해서해당 값을 <App>내에 존재하는 모두에게 공유한다.

// Redux 도 state임. 그렇기 떄문에 " 수정방법 " 을 미리 정의 해야한다. 기존 state의 set...처럼

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let 초기값 = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "더러운 신발", quan: 8 }
];

// 데이터 수정은 리듀서를 이용해서..
function reducer(state = 초기값, 액션) {
  if (액션.type === "수량증가") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    if (copy[0].quan > 0) {
      copy[0].quan--;
    }
    return copy;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
