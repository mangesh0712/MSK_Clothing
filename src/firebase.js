import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBpYviN8INb5dqUpVF6RaqJgJihvH4nh5U",
    authDomain: "blog-post-db709.firebaseapp.com",
    projectId: "blog-post-db709",
    storageBucket: "blog-post-db709.appspot.com",
    messagingSenderId: "607688636944",
    appId: "1:607688636944:web:297b9444062f314d876895"
  };
  
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore();
// const storage = firebase.storage();

export { db };

