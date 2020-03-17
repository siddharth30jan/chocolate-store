import { ADD, REMOVE } from "./types";
const cartReducer = (state = [], action) => {
  console.log("state", state);
  console.log("payload", action.payload);
  switch (action.type) {
    case ADD: {
      let temp = state.indexOf(action.payload);

      if (temp != -1) {
        return [
          ...state,
          { ...action.payload, quantity: state[temp].quantity + 1 }
        ];
      } else return [...state, { ...action.payload, quantity: 1 }];
    }
    case REMOVE: {
      // alert("ASDF");
      let temp = state;
      for (let i = 0; i < temp.size; i++) {
        if (temp[i] === action.payload) {
          temp[i].quantity -= 1;
          break;
        }
      }
      console.log(temp);
      return temp;
    }
    default:
      return state;
  }
};

export default cartReducer;
