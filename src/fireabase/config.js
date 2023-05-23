import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDmZyogTk_zL0yMM7x3e_88jmtJhm7pY8M",
  authDomain: "docs-clone-2f99b.firebaseapp.com",
  projectId: "docs-clone-2f99b",
  storageBucket: "docs-clone-2f99b.appspot.com",
  messagingSenderId: "994818944830",
  appId: "1:994818944830:web:e3e7c18d5ded5af464866f",
  measurementId: "G-93PRK09N67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
