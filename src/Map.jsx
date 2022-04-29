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

    locations.forEach((location, i) => {
      result.push(
        <Marker key={location._id} position={[location.latitude, location.longitude]}>
          <Popup>
            <div className="text-black font-semibold text-sm">
              {location.name}
            </div>
            <img 
              src={`${process.env.REACT_APP_BACKEND_URI}images/${location.previewImage === "" ? location.images[0] : location.previewImage}`} 
              alt="Preview Image"
              className="mb-2"/>
            <div className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 shadow-md" onClick={locationClicked} id={i}>
              View Location
            </div>
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