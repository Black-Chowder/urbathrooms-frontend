import { useEffect, useState } from 'react';

function LocationView(props){
  const [description, setDescription] = useState(null);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState(null);
  const [locId, setLocId] = useState("test init");

  useEffect(() => {
    if (locId !== props.locId){
      fetch(`http://localhost:5000/info?locId=${locId}`)
      .then(res => { if (res.ok) { return res.json() }}).then(data => {
        setName(data.name);
        setDescription(data.description);
        setRating(data.rating);
        setLocId(props.locId);
        console.log(data);
      });
    }
  }, []);


  return(
    <div>
      <div className="mx-auto mb-20 w-9/12 content-center bg-blue-500 grid grid-cols-3 gap-4" style={{height: 800}}>
        <div className="bg-white col-span-2 row-span-2">
          TODO: Carousel
        </div>
        <div className="bg-white">
          { name } | score: { rating } <br/>
          { description } <br/>
        </div>
        <div className="bg-white">
          TODO: Ratings
        </div>
      </div>
    </div>
  )
}

export default LocationView;