import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCartItem, addCartCount } from "../redux/cart/cartActions";
import Alert from "../common/Alert";

function CollectionItem({ item }) {
  const { name, imageUrl, price } = item;
  const onMouseOver = (e) => (e.target.style.opacity = "0.7");
  const onMouseLeave = (e) => (e.target.style.opacity = "1");
  const [alertObj, setAlertObject] = useState({
    showAlert: false,
    color: "green",
    message: "Item Added to Cart",
  });

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCartCount());
    dispatch(addCartItem(item));
    setAlertObject({ ...alertObj, showAlert: true });
  };

  return (
    <div className="py-2 my-2 mr-2 lg:mr-8  relative group">
      <div
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className="bg-cover h-72 w-60 lg:h-96 lg:w-80"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
        }}
      />
      <div className="flex items-center p-2 text-black bg-white shadow-md mt-4 rounded-sm">
        <div className="flex-grow font-sans text-xl">{name}</div>
        <div className="text-xl">&#8377;{price}</div>
      </div>
      <span
        className="flex p-2 cursor-pointer text-black text-opacity-0 group-hover:opacity-100 rounded-sm absolute bottom-20 sm:left-8 md:left-16 lg:left-28 group-hover:bg-white group-hover:text-black"
        onClick={handleAddToCart}
      >
        ADD TO CART
      </span>
      {/* {alertObj?.showAlert && (
        <div className="absolute right-0 top-10">
          <Alert {...alertObj} onChangeShowAlert={setAlertObject} />
        </div>
      )} */}
    </div>
  );
}

export default CollectionItem;
