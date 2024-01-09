// mapActions.js
export const setSelectedPlace = (place) => ({
    type: 'SET_SELECTED_PLACE',
    payload: place,
  });
  
  export const fetchSelectedPlace = (placeId) => {
    // You can perform asynchronous operations here using Redux Thunk
    return async (dispatch) => {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT/${placeId}`);
        const data = await response.json();
        dispatch(setSelectedPlace(data));
      } catch (error) {
        console.error('Error fetching place:', error);
      }
    };
  };
  