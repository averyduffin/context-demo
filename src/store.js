import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { reducer as counterReducer } from './oldReduxActionsReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
