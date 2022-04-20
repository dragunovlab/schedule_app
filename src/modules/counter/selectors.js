import { createSelector } from "@reduxjs/toolkit";

const counterState = (state) => state.counter; //root state

export const itemsSelector = createSelector(
  [counterState],
  (state) => state.items
);
