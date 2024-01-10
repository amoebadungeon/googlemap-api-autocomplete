// MapComponent.js
import React, { useState} from 'react';
import { GoogleMap, LoadScript, Marker, } from '@react-google-maps/api';
import Autocomplete from 'react-google-autocomplete';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedPlace ,addSearch} from './reducer';

const MapComponent = () => {
    
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    // const selectedPlace = useSelector(state => state.map.selectedPlace); 
    // const searchesPlace = useSelector(state => state.searches);
    // const dispatch = useDispatch();
    
    // const handleSearch = (place) => {
    //   dispatch(addSearch(place));
    // }

    // Dispatch redux actions 
    // const handlePlaceSelect = (place) => {

    //   // Convert to plain JS object
    //   const location = {
    //     lat: place.geometry.location.lat(),
    //     lng: place.geometry.location.lng()
    //   };
    
    //   const selectedPlace = {
    //     name: place.formatted_address,
    //     location  
    //   };
    //   console.log('Selected place updated:', selectedPlace);
    //   dispatch(setSelectedPlace(selectedPlace));
    // }
    const handlePlaceSelect = (place) => {
      setSelectedPlace(place);
    };

  const mapContainerStyle = {
    width: '100%',
    height: '480px',

  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  const center = {
    lat: selectedPlace ? selectedPlace.geometry.location.lat() : 0,
    lng: selectedPlace ? selectedPlace.geometry.location.lng() : 0,
    
  };
  console.log(selectedPlace)
  return (
    <div className='map-container'>
      <LoadScript googleMapsApiKey = " " libraries={['places']}>
        <div className='input-search'>
          <Autocomplete
            style={{ width: '100%', padding: '10px' }}
            onPlaceSelected={handlePlaceSelect}
            // types={['(geocode)']}
          />
          </div>
    
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={selectedPlace!== null ? 12 : 2}
        >
          {selectedPlace &&  selectedPlace.geometry && ( 
            <Marker
            onLoad={onLoad}
              position={{
                lat: selectedPlace.geometry.location.lat(),
                lng: selectedPlace.geometry.location.lng(),
              }}
            />
          )}
        </GoogleMap>
        {console.log(selectedPlace)}
      </LoadScript>
      {/* <addSearch onSearch={handleSearch} />
      <div>
      Search History:
      {searchesPlace.map(term => <div>{term}</div>)} 
    </div> */}
    </div>
    
    
  );
};

export default MapComponent;
