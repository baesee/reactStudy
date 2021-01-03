import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import "./Detail.css";

let 박스 = styled.div`
  padding: 20px;
  border: 5px solid red;
`;
let 제목 = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

// 상품상세 컴포넌트
function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputValue, setInputValue] = useState("");
  let 재고 = useContext(재고context);

  // lifeCyle hook..
  useEffect(() => {
    //컴포넌트가 생성될떄 ajax로 값을 불러올떄
    axios.get();

    // 컴포넌트가 보일때, 컴포넌트가 update 될떄, 특정 코드를 실행 할 수 있다.
    // 예제 > 2초후에 my-alert를 숨겨달라
    console.log("안녕하세요");
    let 타이머 = setTimeout(() => {
      setAlert(false);
    }, 2000);

    // 컴포넌트가 사라질떄 코드를 실행시키기 위해서는 return 만 적어주면 된다.
    // return ()=>{ 실행할 내용 }
    return function anything() {
      // 사라질때, 즉 unMount 될때 실행되는 영역
      clearTimeout(타이머);
    };
  }, [alert]); // alert라는 useState가 변경이 될때에만 useEffect가 동작해라 , []로 할 경우 최초에만 실행된다.

  let { id } = useParams(); // 라우터에서 :id의 값을 담는다.
  let findProudct = props.shoes.find(function(shoes) {
    return shoes.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <박스>
        <제목 색상={"red"}>Detail</제목>
        <제목 색상="blue">Detail</제목>
        <제목 className="red">Detail</제목>
      </박스>
      {inputValue}
      <input
        onChange={e => {
          setInputValue(e.target.value);
        }}
      />

      {alert === true ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (findProudct.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findProudct.title}</h4>
          <p>{findProudct.content}</p>
          <p>{findProudct.price}</p>
          <Info 재고={props.재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              var newArray = [...props.재고];
              newArray[0] = newArray[0] - 1;
              props.재고변경(newArray);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

export default Detail;
