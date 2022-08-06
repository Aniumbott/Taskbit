// Import Components
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_ApiKey,
  authDomain: process.env.NEXT_PUBLIC_AuthDomain,
  projectId: process.env.NEXT_PUBLIC_ProjectId,
  storageBucket: process.env.NEXT_PUBLIC_StorageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_MessagingSenderId,
  appId: process.env.NEXT_PUBLIC_AppId,
  measurementId: process.env.NEXT_PUBLIC_MeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default { auth, db };
