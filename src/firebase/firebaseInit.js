import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdDXIF5gDShrhRLjKvtqkXi3I0ImPrvj0",
    authDomain: "vueblogs-4422c.firebaseapp.com",
    projectId: "vueblogs-4422c",
    storageBucket: "vueblogs-4422c.appspot.com",
    messagingSenderId: "459800791622",
    appId: "1:459800791622:web:8526853026872f3057d847",
    measurementId: "G-6XTSJ6HQ8H"
  };

  // Initialize Firebase App with provided config
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(firebaseApp);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export {analytics};
  export default firebaseApp.firestore();