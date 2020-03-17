import React from "react";
import { connect } from "react-redux";
import { addProduct, remProduct } from "../redux/actions";

const ProductTemplate = props => {
  let ourProductInStore = props.cart.filter(
    product1 => product1.id === props.product.id
  );
  return (
    <div
      style={{
        margin: "5px auto",
        padding: "5px",
        background: "pink",
        width: "40%"
      }}
    >
      <h1>{props.product.name}</h1>
      <button
        onClick={() => {
          props.add(props.product);
        }}
      >
        Add to Cart +{" "}
      </button>
      <button
        onClick={() => {
          props.rem(props.product);
        }}
      >
        Remove -{" "}
      </button>
    </div>
  );
};

const matchStateToProps = state => {
  return {
    cart: state.cart
  };
};

const matchDispatchToProps = dispatch => {
  return {
    add: item => dispatch(addProduct(item)),
    rem: item => dispatch(remProduct(item))
  };
};
export default connect(
  matchStateToProps,
  matchDispatchToProps
)(ProductTemplate);
