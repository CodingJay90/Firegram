// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,  serverTimestamp } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdRGFEzN90L2Nk3lGJZ2rfUy9VIRMWm_o",
  authDomain: "fir-storage-8e067.firebaseapp.com",
  projectId: "fir-storage-8e067",
  storageBucket: "fir-storage-8e067.appspot.com",
  messagingSenderId: "220616903637",
  appId: "1:220616903637:web:035d46e2e577d4240acb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app)
const projectStorage = getStorage(app);
const timestamp = serverTimestamp()

export {app, projectFirestore, projectStorage, timestamp}
