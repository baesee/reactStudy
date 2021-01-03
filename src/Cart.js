import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quan}</td>
                <td>
                  {/* Redux 에서 데이터 수정요청할땐 props.deispatch()를 사용 */}
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량증가" });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "수량감소" });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

function state를props화(state) {
  //index.js 에 있는 store안에 있던 redux state 데이터를 가져와서 props로 변환해준다고 봐야함.
  // porps화 한다. > props로 바꿔서 써야만한다.
  return {
    state: state
  };
}
//export default Cart;
export default connect(state를props화)(Cart);
