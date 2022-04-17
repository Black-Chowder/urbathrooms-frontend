import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(props){
  const locations = props.locations || [{ x: 43.1283552, y: -77.6291973, name: "Hello World!" }];
  //const [locations, setLocations] = useState(props.locations || [{ x: 51.505, y: -0.09, name: "Hello World!" }]);

  const renderLocations = () => {
    let result = [];

    if (locations === null) return (<div/>);

    locations.forEach(location => {
      result.push(
        <Marker key={location.name} position={[location.x, location.y]}>
          <Popup>
            <div className="m-2 bg-blue-500 rounded-md">
              Test
            </div>
            {location.name}
          </Popup>
        </Marker>
      );
    });

    return result;
  }

  return (
    <MapContainer className="w-9/12 m-auto my-4" style={{ height: "800px" }} center={[43.1283552, -77.6291973]} zoom={16.5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderLocations()}
    </MapContainer>
  );
}

export default Map;