import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(props){
  const locations = props.locations;
  const setFocusLocation = props.setFocusLocation;
  
  const locationClicked = element => {
    const location = locations[element.target.id];
    setFocusLocation(location);
  }

  const renderLocations = () => {
    let result = [];

    if (locations === null) return (<div/>);

    let i = 0;
    locations.forEach(location => {
      console.log(location);
      result.push(
        <Marker key={location._id} position={[location.latitude, location.longitude]}>
          <Popup>
            <div className="">
              {location.name}
            </div>
            <img 
              src={`http://localhost:5000/getImage/${location.previewImage}`} 
              alt="Preview Image"
              className="mb-2"/>
            <div className="p-2 bg-blue-500 rounded-md cursor-pointer" onClick={locationClicked} id={i}>
              View Location
            </div>
          </Popup>
        </Marker>
      );
      i++;
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