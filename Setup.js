import React from 'react';
import App from './App';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const firebaseConfig = {
  projectId: 'roomies-914c4',
  apiKey: 'AIzaSyAszmhdJm0uAjhcD1qGmK_43pAokAri7dU',
  authDomain: 'roomies-914c4.firebaseapp.com',
  databaseURL: 'https://roomies-914c4.firebaseio.com',
  storageBucket: 'roomies-914c4.appspot.com',
  messagingSenderId: '1068410044812',
  appId: '1:1068410044812:android:f6651b5465f4b2a6e456a9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, database};

const Setup: () => React$Node = () => {
  return <App />;
};

export default Setup;
