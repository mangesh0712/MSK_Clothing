import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import { addCurrentUser } from "./redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";

import Homepage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import SignInAndSignUp from "./pages/SignInAndSignUp";

import { auth, createUserProfileDocument } from "./firebase";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  let unSubscribeFromAuth = null;

  useEffect(() => {
    unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snap) => {
          /// Adding current user in global state
          dispatch(
            addCurrentUser({
              id: snap.id,
              ...snap.data(),
            })
          );
         });
      }
    });
    // Unsubscribe auth
    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          {!currentUser ? <Redirect to="/signin" /> : <Homepage />}
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          {currentUser ? <Redirect to="/" /> : <SignInAndSignUp />}
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
