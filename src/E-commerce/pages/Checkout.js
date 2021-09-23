import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import StripeCheckoutButton from "../components/StipeButton";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const total = createSelector(
    (state) => state,
    (items) =>
      items?.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  const totalPrice = total(cartItems);
  return (
    <div className="bg-white flex justify-center ">
      <div className="flex flex-col w-10/12 lg:w-7/12">
        <span className="flex justify-center text-3xl font-bold font-sans pt-2">
          CART
        </span>
        {!cartItems.length && (
          <span className="flex justify-center text-sm font-light font-sans pt-1">
            Your cart is currently empty.
          </span>
        )}
        <span className="flex justify-center text-md font-medium font-sans pt-1 transform cursor-pointer  hover:scale-110">
          <Link to="/shop">Continue shopping</Link>
        </span>
        {cartItems.length !== 0 && (
          <>
            <div className="flex  w-full border-b border-gray-400 pb-3 p-6">
              <span className="checkoutHeaders w-2.5/10 ">PRODUCT</span>

              <span className="checkoutHeaders w-2/10 ">DESCRIPTION</span>

              <span className="checkoutHeaders w-2/10 ">QUANTITY</span>

              <span className="checkoutHeaders w-2/10 ">PRICE</span>

              <span className="checkoutHeaders w-1.5/10 ">REMOVE</span>
            </div>

            {cartItems.map((item) => (
              <CheckoutItem item={item} key={item.id} />
            ))}

            <div className="text-4xl font-normal flex justify-end pt-8">
              TOTAL: ${totalPrice}
            </div>
            <div className="flex py-10 justify-center text-red-500 font-normal text-2xl">
              *Please use following test credit card for payments*
              <br />
              4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <div className="self-end">
              <StripeCheckoutButton price={totalPrice} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
