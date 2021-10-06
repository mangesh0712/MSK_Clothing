import React, { useEffect } from "react";
import { addCurrentUser } from "./redux/user/userActions";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Router from "./Router";

// import { selectCollectionForPrerview } from "./redux/shop/shopSelector";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // const collectionsArray = selectCollectionForPrerview(state);

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
    /// for adding new collections to the firestore

    // addCollectionAndDocuments(
    //   "collections",
    //   collectionsArray.map(({ title, items }) =>{
    //     return {title,items}
    //   })
    // );
    // Unsubscribe auth
    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
