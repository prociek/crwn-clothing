import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAxt2ucHTIejzthU_0op8oGQRW9C1VG92w",
    authDomain: "crwn-clothing-d90f8.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d90f8.firebaseio.com",
    projectId: "crwn-clothing-d90f8",
    storageBucket: "crwn-clothing-d90f8.appspot.com",
    messagingSenderId: "870110887813",
    appId: "1:870110887813:web:c72e27f5a9645054ae8eec",
    measurementId: "G-4EV7QR459Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;