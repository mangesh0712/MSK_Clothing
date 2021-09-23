import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CartItem from "./CartItem";
import { toggleCartHidden } from "../redux/cart/cartActions";

function CartDropdown() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="flex itme-center flex-col absolute top-20 right-0 h-96 z-10 border-2 w-60 border-gray-500 rounded-sm bg-white ">
      <div className="overflow-y-auto overflow-x-hidden scrollbar scrollbar-thin scroll scrollbar-thumb-black scrollbar-track-gray-200">
        {cartItems.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className=" flex justify-center mt-24 text-xl text-bold m-2">
            Your cart is empty.
          </span>
        )}
      </div>
      <div
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
        className="ecButtons text-center text-sm lg:text-lg bg-gray-700 mt-auto m-3"
      >
        GO TO CHECKOUT
      </div>
    </div>
  );
}

export default CartDropdown;
