import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex p-6 md:p-16 items-center justify-center flex-col bg-white">
      <img src="/image/shopping-bag-2.jpg" className="h-60 w-72" />
      <p className="text-2xl font-semibold font-sans mt-5">
        Hey, it feels so light!
      </p>
      <p className="text-sm text-gray-500 mb-5">
        There is nothing in your bag. Let's add some items.
      </p>
      <button className="p-2 mt-3 border font-semibold border-1 border-black bg-white">
        <Link to="/shop">ADD ITEMS FROM SHOP</Link>
      </button>
    </div>
  );
}

export default EmptyCart;
