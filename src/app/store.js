import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import votationReduce from '../features/portfolio/votationSlice'


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    votation: votationReduce
  },
});
