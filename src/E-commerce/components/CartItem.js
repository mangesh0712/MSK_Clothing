import React from "react";

function CartItem({item : { imageUrl, price, name, quantity }}) {
  return (
    <div className="flex items-center m-3 ">
      <img src={imageUrl} alt="img" width="80px" height="80px"/>
      <div className="flex flex-col ml-3">
        <span className="text-bold text-lg truncate">{name}</span>
        <span className="text-bold text-lg">
          {quantity} × &#8377;{price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
