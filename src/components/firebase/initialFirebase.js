// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, get, child} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaBqyEacIiIroK3M9Ld7dWSbsl6s7LShc",
  authDomain: "api-invite.firebaseapp.com",
  projectId: "api-invite",
  storageBucket: "api-invite.appspot.com",
  messagingSenderId: "200222055249",
  appId: "1:200222055249:web:ecedb7eb0567e385021170",
  measurementId: "G-SCJF31BR0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
// const analytics = getAnalytics(app);

const fetchWeddingData = async (id) => {
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, `01`))
        if (snapshot.exists()) {
            return snapshot.val()
        } else {
            console.log('eror', );
            return null
        }
    } catch (error) {
        console.log('tidak bekerja', error);
        return null
    }
}

export {app, database, fetchWeddingData}