import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFR1AR4u4fBMIiPCTA9dC_HO0-_QYGhd8",
  authDomain: "cau-project-2020.firebaseapp.com",
  databaseURL: "https://cau-project-2020.firebaseio.com",
  projectId: "cau-project-2020",
  storageBucket: "cau-project-2020.appspot.com",
  messagingSenderId: "490945669494",
  appId: "1:490945669494:web:8c5e7a4e8cf1452dae7257",
  measurementId: "G-EK4WZGS4Z1",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
