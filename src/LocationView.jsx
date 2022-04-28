import { useEffect, useState, useRef } from 'react';

function LocationView(props){
  const location = props.location;


  const fieldRef = useRef();
  useEffect(() => {
    if (location === null)
      return;

    if (fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: "smooth" });
      console.log("Scroll into view called");
    }
  });

  if (location === null){
    return (<div/>);
  }

  const name = location.name;
  const rating = location.rating;
  const description = location.description;
  const imageIds = location.images;

  return(
    <div className="rounded-xl mx-auto mb-20 w-9/12 content-center bg-gray-100 p-4 shadow-2xl" style={{ height: 800 }} ref={fieldRef}>
      <div className="grid grid-cols-7 gap-4" style={{height: "100%"}}>
        <div className="col-span-4 row-span-2 rounded-xl flex items-center relative">
          <img src={`http://localhost:5000/getImage/${imageIds[0]}`}
            style={{WebkitFilter:"blur(8px)", objectFit:"cover"}}
            className="h-full rounded-xl"/>
          <div className="p-4 absolute">
            <img src={`http://localhost:5000/getImage/${imageIds[0]}`}
              className="rounded-xl shadow-2xl"/>
          </div>
        </div>
        <div className="bg-gray-200 col-span-3 py-5 px-2 rounded-xl shadow-inner">
          <div className="flex space-x-4">
            <p className="text-lg text-black font-bold">{name}</p> <p className="text-lg">Rating: {rating} </p>
          </div>
          <p>{description}</p>
        </div>
        <div className="bg-gray-200 col-span-3 py-5 px-2 rounded-xl shadow-inner">
          TODO: Ratings
        </div>
      </div>
    </div>
  );
}

export default LocationView;