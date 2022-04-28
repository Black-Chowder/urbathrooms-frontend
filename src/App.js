import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import LocationView from './LocationView';
import { BACKEND_URI } from './GlobalConsts';

function App() {

  const [focusLocation, setFocusLocation] = useState(null);
  const [locations, setLocations] = useState(null);

  //Get locations and location data
  useEffect(() => {
    if (locations === null){
      fetch(`${BACKEND_URI}locations?campus=river`)
      .then(res => { if (res.ok) { return res.json() }}).then(data => {
        setLocations(data);
      });
    }
  }, []);

  return (
    <div>
      <NavBar />
      <Map 
        locations={locations}
        setFocusLocation={setFocusLocation}
      />
      <LocationView 
        location={focusLocation}
      />
    </div>
  );
}

export default App;
