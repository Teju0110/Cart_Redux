import { useState } from "react";

const initialState = [];
var total=0;


export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state = [...state, action.payload];
      return state;

    case "REMOVE_FROM_CART":
      const filterState = state.filter((item) =>
        item.id === action.payload ? null : item
      );

      state=filterState
      return state;

    default:
      return state;
  }
};
