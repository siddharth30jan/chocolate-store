import React from "react";
import ProductTemplate from "./ProductTemplate";
import { connect } from "react-redux";

const data = [
  {
    id: 1,
    name: "Bounty"
  },
  {
    id: 2,
    name: "Dairy"
  },
  {
    id: 3,
    name: "Milk"
  },
  {
    id: 4,
    name: "Milkybar"
  },
  {
    id: 5,
    name: "Kitkat"
  },
  {
    id: 6,
    name: "Eclairs"
  },
  {
    id: 7,
    name: "choco"
  },
  {
    id: 8,
    name: "vanilla js XD"
  }
];
const HomePage = props => {
  return (
    <div>
      {props.cart.map(x=><h1>{x.name}</h1>)}
      {data.map(product => (
        <ProductTemplate product={product} />
      ))}
    </div>
  );
};
const matchStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(matchStateToProps, null)(HomePage);
