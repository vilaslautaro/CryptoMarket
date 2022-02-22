import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACTnOH4Z-ewzcZgBfRpmTZw-HcFmp8VrE",
  authDomain: "cryptomarket-4dc55.firebaseapp.com",
  projectId: "cryptomarket-4dc55",
  storageBucket: "cryptomarket-4dc55.appspot.com",
  messagingSenderId: "314177552422",
  appId: "1:314177552422:web:004dc0be17f653ad4f26e7"
};

const app = initializeApp(firebaseConfig);

// exporte la base de datos de firestore q contiene mis productos, para poder usarlos en la app
export const db = getFirestore(app)