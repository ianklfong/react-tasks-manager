import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { collection, doc, getDocs, addDoc, deleteDoc } from 'firebase/firestore'

//database config 
// const firebaseConfig = {
//     apiKey: "AIzaSyD_aumFmHWejTRjemM_a-mydetkCfC5Ntk",
//     authDomain: "task-manager-86967.firebaseapp.com",
//     projectId: "task-manager-86967",
//     storageBucket: "task-manager-86967.appspot.com",
//     messagingSenderId: "262718117789",
//     appId: "1:262718117789:web:55d83e133a438f99280174",
//     measurementId: "G-8986CGXWKJ"
//   };

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDqzTYU4Y-CebtPmIYFltiaqNFkNgphiY",
  authDomain: "task-manager-f546f.firebaseapp.com",
  projectId: "task-manager-f546f",
  storageBucket: "task-manager-f546f.appspot.com",
  messagingSenderId: "975511738576",
  appId: "1:975511738576:web:830b8bdf6adea9a5a6e6d5"
};



  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const testCollectionRef = collection(db, 'task');
  export const listCollectionRef = collection(db, 'list');

