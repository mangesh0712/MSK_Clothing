import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC6vdoPqfu-6SPDbEu7wBJ-eYelQb9Ltg",
  authDomain: "ecom-web-62653.firebaseapp.com",
  projectId: "ecom-web-62653",
  storageBucket: "ecom-web-62653.appspot.com",
  messagingSenderId: "792147575268",
  appId: "1:792147575268:web:5e1c29b9343a7c08c787f1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/// ADD NEW USER IN DATABASE  
export const createUserProfileDocument = async (
  userAuthObject,
  additionalData
) => {
  if (!userAuthObject) return;

  const userRef = firestore.doc(`user/${userAuthObject.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuthObject;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }

  console.log(snapshot);

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
