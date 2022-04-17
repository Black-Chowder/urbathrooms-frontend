import React from 'react';

export default function NavBar() {
  return(
    <div className="flex justify-between h-auto mx-auto px-4 bg-white w-screen top-0 shadow-md">
      <div className="flex space-x-7 my-3">
        <p className="text-lg text-black font-bold">U of R Bathrooms</p>
        <p className="text-lg text-black font-semibold">River Campus</p>
      </div>
    </div>
  );
}