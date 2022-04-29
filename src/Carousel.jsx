import React, { useState } from 'react';

export const CarouselItem = ({ children, width }) => {
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
          <img src={src}
            style={{ WebkitFilter: "blur(8px)", objectFit: "cover" }}
            className="h-full rounded-xl" />
          <div className="p-4 absolute">
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
      <div className="inner h-full" style={{ transform: `translateX(-${displayIndex}00%)`, whiteSpace:"nowrap", transition:"transform 0.3s" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators absolute bottom-0 w-full">
        <div className="flex justify-center space-x-2">
          <button className="text-white font-bold" onClick={() => { updateIndex(displayIndex - 1); }}>
            Previous
          </button>
          {
            React.Children.map(children, (child, index) => {
              return(
                <button className="text-white font-bold" onClick={() => { updateIndex(index); }}>
                  {index + 1}
                </button>
              )
            })
          }
          <button className="text-white font-bold" onClick={() => { updateIndex(displayIndex + 1); }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;