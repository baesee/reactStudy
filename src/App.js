/* eslint-disable */

import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import logo from "./logo.svg";
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";
import axios from "axios";
import Cart from "./Cart.js";
// 라우팅을 하기 위해서 app.js , index.js 에 라우팅 셋팅을 해준다.
import { Link, Route, Switch } from "react-router-dom";

export let 재고context = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">ShoesShop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">Detail</Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* 라우팅 하는방법 
        exact 옵션 : 라우터를 기본형태로 사용 하여 /detail 로 접근 하였을 경우 ->
         "/" , "/detail" 두 문자열이 모두 포함이 되기때문에 '메인페이지에요'와 '디테일페이지에요' 두개가 동시에 노출된다.
         /detail로 접근했을 경우 경로가 정확히 일치할때만 보여주기 하기위해서 'exact' 옵션을 사용.

         <Route exact path="/">
            <div>메인페이지에요</div>
          </Route>
          <Route path="/detail">
            <div>디테일페이지에요</div>
          </Route>  
      */}

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% 시즌할인 중입니다.</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map(function(shoes, index) {
                  return <ShoesItem shoes={shoes} key={index} />;
                })}
              </div>
            </재고context.Provider>
            <button
              className="btn btn-primary"
              onClick={() => {
                //axios.post("서버 URL", { id: "baekm", pw: "12345" });

                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then(result => {
                    setShoes([...shoes, ...result.data]);
                  })
                  .catch(() => {});
              }}
            >
              더보기
            </button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고context.Provider>
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을때 이거 보여줘라</div>
          <div>예외처리 처럼 사용하면 될 것 같다.</div>
          <div>
            스위치 태그를 사용하면 문자열이 중복되서 매칭이 되더라도 가장 위
            Route먼저 보여주기떄문에
          </div>
          <div> 하나의 라우터만 노출됨.</div>
        </Route>
      </Switch>
      {/* <Route path="/anything" component={ShoesItem}></Route> */}
    </div>
  );
}

// 1. 컴포넌트로 만들어보자 , 데이터 바인딩까지 , 반복문
function ShoesItem(props) {
  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.shoes.id);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <h4>
        {props.shoes.content} & {props.shoes.price}
      </h4>
      {/* 
      {재고[0]}!!!
      */}
      <Test></Test>
    </div>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return <p>재고 ::: {재고}</p>;
}

export default App;
