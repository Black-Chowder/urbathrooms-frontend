import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './NavBar';
import Map from './Map';
import LocationView from './LocationView';

function App() {
  const [viewLocName, setViewLocName] = useState(null);

  return (
    <div>
      <NavBar />
      <Map 
        setViewLoc={setViewLocName}
      />
      <LocationView 
        locId={viewLocName}
      />
    </div>
  );
}

export default App;
