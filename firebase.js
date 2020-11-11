import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTtTB97GKoGJ5byAevrotJ2p6E8jfiB1Y",
  authDomain: "ca01-3120a.firebaseapp.com",
  databaseURL: "https://ca01-3120a.firebaseio.com",
  projectId: "ca01-3120a",
  storageBucket: "ca01-3120a.appspot.com",
  messagingSenderId: "627046216341",
  appId: "1:627046216341:web:f65664868855a2d057219c",
  measurementId: "G-5LR9VPKCRN",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
