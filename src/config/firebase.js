import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAr8mVUrZLORO1D1OSYw2U-FRbW8s5j16A",
  authDomain: "tiktok---jornadadev-de751.firebaseapp.com",
  projectId: "tiktok---jornadadev-de751",
  storageBucket: "tiktok---jornadadev-de751.appspot.com",
  messagingSenderId: "196434124986",
  appId: "1:196434124986:web:16496db487769be0826283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;