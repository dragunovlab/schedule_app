import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../modules/counter/slice';

//root reducer
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store



