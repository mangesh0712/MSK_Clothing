import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  addCartCount,
  removeCartCount,
  clearItemFromCart,
  removeCartItem,
} from "../redux/cart/cartActions";

function CheckoutItem({ item }) {
  const { name, quantity, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center  w-full border-b border-gray-400 pb-3 ">
      <div className="checkoutItemContent w-2.5/10 p-2 ">
        <img src={imageUrl} alt="Image" width="114px" height="140px" />
      </div>
      <span className="checkoutItemContent w-2/10 text-2xl font-light">
        {name}
      </span>
      <span className="checkoutItemContent w-2/10">
        <span
          className="pr-1 text-2xl  dingBagHover"
          onClick={() => {
            dispatch(removeCartItem(item));
            dispatch(removeCartCount());
          }}
        >
          &#10094;
        </span>
        <span className="text-2xl font-light">{quantity}</span>
        <span
          className="pl-1 text-2xl  dingBagHover"
          onClick={() => {
            dispatch(addCartItem(item));
            dispatch(addCartCount());
          }}
        >
          &#10095;
        </span>
      </span>
      <span className="checkoutItemContent w-2/10 text-2xl font-light">
        ${price}
      </span>
      <div className="checkoutItemContent w-1.5/10 text-2xl font-light">
        <button
          className="text-2xl dingBagHover"
          onClick={() => {
            dispatch(clearItemFromCart(item));
            dispatch(removeCartCount(quantity));
          }}
        >
          &#10005;
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
