import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPHzQBgDtPhGATsqJxa5DJNid1ooSENrw",
  authDomain: "slackclone-appx1.firebaseapp.com",
  databaseURL: "https://slackclone-appx1.firebaseio.com",
  projectId: "slackclone-appx1",
  storageBucket: "slackclone-appx1.appspot.com",
  messagingSenderId: "896939968054",
  appId: "1:896939968054:web:218f26550100be9a207a97",
  measurementId: "G-PR5SY7PM2S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
