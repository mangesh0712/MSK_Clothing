import React, { useEffect } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { UserIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import CartDropdown from "./CartDropdown";

import { removeCurrentUser } from "../redux/user/userActions";
import { toggleCartHidden } from "../redux/cart/cartActions";

function Header() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const hideCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  let history = useHistory();
  let location = useLocation();

  // useEffect(() => {
  //   console.log(location, "m");
  // }, []);

  const onSignOut = () => {
    auth.signOut().then((res) => {
      dispatch(removeCurrentUser());
      history.push("/signin");
    });
  };

  return (
    <>
      <div
        className={`m-1 p-1 md:m-3 md:p-3 flex items-center bg-gray-100 rounded-sm relative`}
      >
        <Link to="/" className="ml-8 flex-grow md:flex-grow-0">
          <Logo></Logo>
        </Link>
        {/* {isAuth?.displayName ? (
          <div className="hidden md:flex flex-grow  space-x-1 mb-1 pl-2 self-end">
            <UserIcon className="h-4" />
            <span className="flex items-end font-serif text-xs md:text-sm text-gray-500">
              {isAuth?.displayName}
            </span>
          </div>
        ) : ( */}
        <div className="flex flex-grow"></div>
        {/* )} */}
        <div className="flex items-center  md:space-x-3 cursor-pointer">
          <Link to="/shop" className="shopHeaders">
            SHOP
          </Link>
          <Link to="/shop" className="shopHeaders">
            CONTACT
          </Link>
          {
            isAuth && (
              <div className="shopHeaders" onClick={onSignOut}>
                SIGN OUT
              </div>
            )
            // <Link
            //   to="/signin"
            //   className={`shopHeaders ${
            //     location.pathname === "/signin" ? "hidden" : ""
            //   }`}
            // >
            //   SIGN IN
            // </Link>
          }
          <div
            className={`${
              !isAuth && "invisible"
            } shopHeaders flex justify-center items-center `}
            onClick={() => dispatch(toggleCartHidden())}
          >
            <ShoppingBagIcon className="h-10 text-gray-600" />
            <span className="bottom-3 text-sm md:text-md absolute top-6 md:top-9">
              {cartCount}
            </span>
          </div>
          {hideCart ? null : <CartDropdown />}
        </div>
      </div>
    </>
  );
}

export default Header;
