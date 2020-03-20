import React from "react";

const AddBtn = props => {
  return (
    <button
      onClick={() => {
        props.add(props.product);
      }}
    >
      Add to Cart + {(props.magic && props.magic.quantity) || 0}
    </button>
  );
};

export default AddBtn;
