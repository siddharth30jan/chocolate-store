import React from "react";
import { connect } from "react-redux";
import { addProduct, remProduct } from "../redux/actions";
import { REMALL } from "../redux/types";

const Cart = props => {
  function sort(X) {
    return X.sort((a, b) => {
      console.log(a.id, b.id);
      return a.id > b.id;
    });
  }

  return (
    <div>
      <h1>Heres your Cart</h1>
      {(props.cart.length !== 0 &&
        sort(props.cart).map(x => {
          return (
            <div
              style={{
                margin: "5px",
                padding: "5px",
                width: "200px",
                height: "150px",
                background: "blue"
              }}
            >
              <h1>{x.name}</h1>
              <h2>{x.quantity}</h2>
              <div style={{ padding: "2px" }}>
                <button
                  onClick={() => {
                    props.add(x);
                  }}
                >
                  Add +{" "}
                </button>
              </div>
              <div style={{ padding: "2px" }}>
                <button
                  onClick={() => {
                    props.rem(x);
                  }}
                >
                  Remove -{" "}
                </button>
              </div>
              <div style={{ padding: "2px" }}>
                <button
                  onClick={() => {
                    props.remAll(x);
                  }}
                >
                  Remove All -{" "}
                </button>
              </div>
            </div>
          );
        })) || <h1>EMPTY CART</h1>}
    </div>
  );
};

const X = state => {
  return {
    cart: state.cart
  };
};
const Y = dispatch => {
  return {
    add: item => dispatch(addProduct(item)),
    rem: item => dispatch(remProduct(item)),
    remAll: item => dispatch({ type: REMALL, payload: item })
  };
};
export default connect(X, Y)(Cart);
