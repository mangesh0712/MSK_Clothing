import React from "react";

function Navbar() {
  return (
    <div className="hidden sm:flex px-1 ">
      <div className="flex space-x-2 lg:space-x-6">
        <p className="NavItems">Envato Elements </p>
        <p className="NavItems">Envato Studio</p>
        <p className="NavItems">Community</p>
        <p className="NavItems">Forum</p>
        <p className="NavItems">Help</p>
      </div>
    </div>
  );
}

export default Navbar;
