import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCqbaLCbCfMNmpO-wK5br1Kqg_1Y28Ufic",
    authDomain: "facebook-clone-yt-5aedf.firebaseapp.com",
    projectId: "facebook-clone-yt-5aedf",
    storageBucket: "facebook-clone-yt-5aedf.appspot.com",
    messagingSenderId: "964990400949",
    appId: "1:964990400949:web:ad1bb5934f2286cba6c1fc",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { auth, provider, db, storage };
