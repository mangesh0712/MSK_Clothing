import React from "react";
import Navbar from "./Navbar";

function HeaderOne() {
  return (
    <div className="flex items-center">
      {/* logo  */}
      <div className="flex items-center cursor-pointer">
        <div className="flex items-center">
          <span className="text-sm md:text-3xl  font-semibold font-mono text-white">
            envato
          </span>
          <span className="text-sm text-green-400 font-mono md:text-3xl">tuts+</span>
        </div>
      </div>
      {/* navbars right */}
      <div className="flex flex-grow justify-end px-1">
        <Navbar />
      </div>
      {/* Action buttons  */}
      <div className="flex items-center justify-end space-x-2 lg:space-x-6 lg:-ml-10">
        <div className="bg-green-400  AuthButtons">Subscribe</div>
        <div className="border-green-300 border AuthButtons">Sign In</div>
      </div>
    </div>
  );
}

export default HeaderOne;
