import { useState } from 'react';

function LocationView(props){
  //TODO: Get information about location from viewloc's server
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(0);

  fetch("http://localhost:5000/info?locId=FrontendRequest")
    .then(res => { res.json().then(data => {
      setDescription(data.description);
      setRating(data.rating);
    }) });

  return(
    <div>
      <div className="mx-auto mb-20 w-9/12 content-center bg-blue-500 grid grid-cols-3 gap-4" style={{height: 800}}>
        <div className="bg-white col-span-2 row-span-2">
          TODO: Carousel
        </div>
        <div className="bg-white">
          { description } <br/>
          { rating }
        </div>
        <div className="bg-white">
          TODO: Ratings
        </div>
      </div>
    </div>
  )
}

export default LocationView;