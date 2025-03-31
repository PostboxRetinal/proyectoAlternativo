import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.FIREBASE_apiKey,
	authDomain: import.meta.env.FIREBASE_authDomain,
	projectId: import.meta.env.FIREBASE_projectId,
	storageBucket: import.meta.env.FIREBASE_storageBucket,
	messagingSenderId: import.meta.env.FIREBASE_messagingSenderId,
	appId: import.meta.env.FIREBASE_appId,
	measurementId: import.meta.env.FIREBASE_measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, googleProvider, db };
