import React from "react";
import { connect } from "react-redux";
import { addProduct, remProduct } from "../redux/actions";
import AddBtn from "./AddBtn";
import RemBtn from "./RemBtn";

const ProductTemplate = props => {
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

      <AddBtn product={props.product} add={props.add} magic={props.magic} />

      {(props.magic && props.magic.quantity >= 1 && (
        <RemBtn rem={props.rem} product={props.product} />
      )) ||
        null}
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
