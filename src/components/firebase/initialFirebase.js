// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, get, child} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAaBqyEacIiIroK3M9Ld7dWSbsl6s7LShc",
//   authDomain: "api-invite.firebaseapp.com",
//   projectId: "api-invite",
//   storageBucket: "api-invite.appspot.com",
//   messagingSenderId: "200222055249",
//   appId: "1:200222055249:web:ecedb7eb0567e385021170",
//   measurementId: "G-SCJF31BR0S"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAoPrbgY5U9-ubu0r5k4T38gXi2Hcs7koQ",
    authDomain: "invitee-next.firebaseapp.com",
    databaseURL: "https://invitee-next-default-rtdb.firebaseio.com",
    projectId: "invitee-next",
    storageBucket: "invitee-next.appspot.com",
    messagingSenderId: "167506062593",
    appId: "1:167506062593:web:d8017e6e7e5d150c9e3f00",
    measurementId: "G-WC95GBW0EX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
// const analytics = getAnalytics(app);

const fetchWeddingData = async (id) => {
    const dbRef = ref(database);
    try {
        const data = await get(child(dbRef, `/wedings/${id}`))
        if (data.exists()) {
            return data.val()
        } else {
            console.log('eror' );
            return null
        }
    } catch (error) {
        console.log('tidak bekerja', error);
        return null
    }
}

export {app, database, fetchWeddingData}