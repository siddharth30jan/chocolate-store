import { ADD, REMOVE } from "./types";
export const addProduct = item => {
  return {
    type: ADD,
    payload: item
  };
};

export const remProduct = item => {
  return {
    type: REMOVE,
    payload: item
  };
};
