import React, { useState } from 'react';

const CarouselItem = ({ children }) => {
  return(
    <div className="h-full" style={{display:"inline-flex", alignItems:"center", justifyContent:"center"}}>
      {children}
    </div>
  );
}

const Carousel = props => {
  const children = [];
  const imgSources = props.srcs;
  const [displayIndex, setDisplayIndex] = useState(0);

  //Create carousel items as children
  imgSources.forEach(src => {
    children.push(
      <CarouselItem className="h-full">
        <div className="relative flex items-center justify-center rounded-xl h-full">
          {/* Blurry Background Image */}
          <img src={src}
            style={{ WebkitFilter: "blur(8px)", objectFit: "cover" }}
            className="h-full rounded-xl" />

          {/* Actual Image */}
          <div className="p-9 absolute">
            <img src={src}
              className="rounded-xl shadow-2xl"
              alt="Preview Image"/>
          </div>
        </div>
      </CarouselItem>
    );
  });


  const updateIndex = index => {
    if (index < 0)
      index = 0;
    else if (index >= React.Children.count(children))
      index = React.Children.count(children) - 1;

    setDisplayIndex(index);
  }

  return(
    <div className="carousel h-full rounded-xl shadow-inner relative" style={{ overflow:"hidden" }}>

      {/* Display Image Handling */}
      <div className="inner h-full" 
        style={{ transform: `translateX(-${displayIndex}00%)`, whiteSpace:"nowrap", transition:"transform 0.3s" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      {/* Left and right navigation */}
      <div className="absolute top-0 h-full w-full flex">
        <div className="flex my-auto w-full h-full justify-between py-14">
          <div className="hover:bg-black hover:bg-opacity-20 flex justify-between cursor-pointer rounded-r-xl" 
            onClick={() => { updateIndex(displayIndex - 1); }}>
            <p className="text-white font-extrabold text-5xl my-auto">
                {"<"}
            </p>
          </div>
          <div className="hover:bg-black hover:bg-opacity-20 flex justify-between cursor-pointer rounded-l-xl" 
            onClick={() => { updateIndex(displayIndex + 1); }}>
            <p className="text-white font-extrabold text-5xl my-auto"
              >
              {">"}
            </p>
          </div>
        </div>
      </div>

      {/* Indexed image navigation */}
      <div className="indicators absolute bottom-0 w-full">
        <div className="flex justify-center space-x-2">
          {
            React.Children.map(children, (child, index) => {
              return(
                //TODO: Change to display miniature images
                <button className="text-white font-bold" onClick={() => { updateIndex(index); }}>
                  {index + 1}
                </button>
              );
            })
          }
        </div>
      </div>

    </div>
  );
}

export default Carousel;