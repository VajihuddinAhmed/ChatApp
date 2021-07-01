import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBuPdHT57BfW_OOQlpsYy39GoKC6noCYBc",
    authDomain: "chat-app-6995c.firebaseapp.com",
    projectId: "chat-app-6995c",
    storageBucket: "chat-app-6995c.appspot.com",
    messagingSenderId: "859993604363",
    appId: "1:859993604363:web:266f8e2e319e965554a20e"
};

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };