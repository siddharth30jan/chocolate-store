import React, { useEffect, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import { connect } from "react-redux";
/*
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
];*/
const HomePage = props => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://us-central1-react-redux-firebase-3dc25.cloudfunctions.net/api/data`
    )
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      {data &&
        data.map(product => (
          <ProductTemplate
            product={product}
            magic={props.cart.filter(x => x.id === product.id)[0]}
          />
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
