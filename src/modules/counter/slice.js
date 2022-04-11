import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  value: 0,
  status: "idle",
};

export const timeTableSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    setItems: (state, action) => {
      state.items = action.payload;
      console.log(state.items, "12")
    },
  },
});

export const { increment, decrement, incrementByAmount, setItems } =
  timeTableSlice.actions;


export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default timeTableSlice.reducer;
