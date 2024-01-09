import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    selectedPlace: null,
    searches: []
  },
});
// Action creators
export const setSelectedPlace = (place) => {
    return {
      type: 'map/setSelectedPlace',
      payload: place
    };
  };
  export const addSearch = (place) => {
    return {
      type: 'map/setSelectedPlace',
      payload: place
    };
  };
export default mapSlice.reducer;