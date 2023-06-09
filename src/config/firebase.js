import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNnjmuzOZyLl0KIamL5Avp1fEYLjB-sKY",
  authDomain: "todo-list-f88ad.firebaseapp.com",
  projectId: "todo-list-f88ad",
  storageBucket: "todo-list-f88ad.appspot.com",
  messagingSenderId: "929966543019",
  appId: "1:929966543019:web:2e36d43fbad608708067ee"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)