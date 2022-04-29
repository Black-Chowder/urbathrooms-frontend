import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import LocationView from './LocationView';

function App() {

  const [focusLocation, setFocusLocation] = useState(null);
  const [locations, setLocations] = useState(null);

  //Get locations and location data
  useEffect(() => {
    if (locations === null){
      fetch(`${process.env.REACT_APP_BACKEND_URI}locations?campus=river`)
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
