import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { putResolve } from "@redux-saga/core/effects";

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

firebase.initializeApp(config);

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
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  collectionsArray
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  collectionsArray.forEach(collection => {
    const docRef = collectionRef.doc();
    batch.set(docRef, collection);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const tranformedCollections = collections.docs
    .map(doc => {
      const { title, items } = doc.data();
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      };
    })
    .reduce((acc, next) => {
      acc[next.title.toLowerCase()] = next;
      return acc;
    }, {});
  return tranformedCollections;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const isUserAuthenticated = () =>
  new Promise((resolve, reject) => {
    try {
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      });
    } catch (err) {
      reject(err);
    }
  });

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
