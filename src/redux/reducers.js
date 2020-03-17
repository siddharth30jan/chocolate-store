import { ADD, REMOVE } from "./types";
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD: {
      //Check if it is present
      const curProduct = state.filter(
        product => product.id === action.payload.id
      )[0];
      if (curProduct) {
        ///Remove it
        const filteredArray = state.filter(
          product => product.id !== action.payload.id
        );
        return [
          ...filteredArray,
          { ...action.payload, quantity: curProduct.quantity + 1 }
        ];
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }
    case REMOVE: {
      const temp = state.filter(x => x.id === action.payload.id)[0];
      if (temp) {
        const p = state.filter(x => x.id !== action.payload.id);
        if (temp.quantity == 1) return [...p];
        else return [...p, { ...action.payload, quantity: temp.quantity - 1 }];
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
