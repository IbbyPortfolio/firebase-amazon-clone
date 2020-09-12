import firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyBIDpKjhVR99Vqux_gjXB6UpLl7SIPl6Bs',
   authDomain: 'clone-2bed4.firebaseapp.com',
   databaseURL: 'https://clone-2bed4.firebaseio.com',
   projectId: 'clone-2bed4',
   storageBucket: 'clone-2bed4.appspot.com',
   messagingSenderId: '1056923257010',
   appId: '1:1056923257010:web:a4a260ecc25be8a63b61ab',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
