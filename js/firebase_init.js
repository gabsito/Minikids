// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAurW4fVweGHipb25sKreuKru7xiM-kzpk",
  authDomain: "minikids-1.firebaseapp.com",
  projectId: "minikids-1",
  storageBucket: "minikids-1.appspot.com",
  messagingSenderId: "953312249706",
  appId: "1:953312249706:web:a249e440ca867b4d31c713",
  measurementId: "G-6JT9FLD06Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);