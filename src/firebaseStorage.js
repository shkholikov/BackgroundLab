import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: "AIzaSyButSnZkEDVovquX3xCtemp3lDZqolPs08",
	authDomain: "backgroundlab.firebaseapp.com",
	projectId: "backgroundlab",
	storageBucket: "backgroundlab.appspot.com",
	messagingSenderId: "714118806434",
	appId: "1:714118806434:web:db86f0c532af8242cc50fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
