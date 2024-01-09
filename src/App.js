// App.js
import React from 'react';
import MapComponent from './component/MapComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps Autocomplete Demo</h1>
      </header>
      <main>
        <MapComponent />
      </main>
    </div>
  );
}

export default App;
