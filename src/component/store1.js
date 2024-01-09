// store.js

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

import mapReducer from './reducer';

export default configureStore({
  reducer: {
    map: mapReducer
  }
});