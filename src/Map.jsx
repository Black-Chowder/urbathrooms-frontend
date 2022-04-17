import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

function Map(props){
  const locations = props.locations || [{ x: 51.505, y: -0.09, name: "Hello World!" }];
  //const [locations, setLocations] = useState(props.locations || [{ x: 51.505, y: -0.09, name: "Hello World!" }]);

  const renderLocations = () => {
    let result = [];

    if (locations === null) return (<div/>);

    locations.forEach(location => {
      result.push(
        <Marker key={location.name} position={[location.x, location.y]}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      )
    });

    return result;
  }

  return (
    <MapContainer className="h-96 w-9/12 m-auto" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {renderLocations()}
    </MapContainer>
  );
}

export default Map;