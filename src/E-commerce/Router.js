import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Checkout from "./pages/Checkout";
import SignInAndSignUp from "./pages/SignInAndSignUp";

function Router() {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <>
      {!isAuth ? (
        <SignInAndSignUp />
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default Router;
