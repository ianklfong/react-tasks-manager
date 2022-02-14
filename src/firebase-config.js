import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

//database config 
const firebaseConfig = {
    apiKey: "AIzaSyD_aumFmHWejTRjemM_a-mydetkCfC5Ntk",
    authDomain: "task-manager-86967.firebaseapp.com",
    projectId: "task-manager-86967",
    storageBucket: "task-manager-86967.appspot.com",
    messagingSenderId: "262718117789",
    appId: "1:262718117789:web:55d83e133a438f99280174",
    measurementId: "G-8986CGXWKJ"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
