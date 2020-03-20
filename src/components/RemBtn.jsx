import React from "react";

const RemBtn = props => {
  return (
    <button
      onClick={() => {
        props.rem(props.product);
      }}
    >
      Remove -{" "}
    </button>
  );
};

export default RemBtn;
