import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({

  name: 'counter',
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
    },
  },
  
});

export const { increment, decrement, incrementByAmount, setItems } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
