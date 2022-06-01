// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4ao1xuyIyrXCWMDpQchiP7fNuVCh-isU",
    authDomain: "simple-auth-react-41f1d.firebaseapp.com",
    projectId: "simple-auth-react-41f1d",
    storageBucket: "simple-auth-react-41f1d.appspot.com",
    messagingSenderId: "842281976721",
    appId: "1:842281976721:web:61c0a7d36b1587a55c5030",
    measurementId: "G-3JCGNZ7SRH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
