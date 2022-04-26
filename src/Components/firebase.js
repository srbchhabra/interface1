import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "@firebase/firestore";
import { getStorage, ref , uploadBytes } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA_yU5rLD_lFG9dwrhRbAQLWmqEq4A8k-0",
  authDomain: "interface-2e563.firebaseapp.com",
  projectId: "interface-2e563",
  storageBucket: "interface-2e563.appspot.com",
  messagingSenderId: "908631385180",
  appId: "1:908631385180:web:9300d9daf2666399feb299",
  measurementId: "G-5P8KCBE5HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const firestore = getFirestore(app);
const storage = getStorage(app);


export {firestore , storage, ref , uploadBytes };