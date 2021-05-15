import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: 'AIzaSyAyKNMzA49gwuiIpURBDWbNDOVvMl5otu4',
	authDomain: 'photog-49b18.firebaseapp.com',
	projectId: 'photog-49b18',
	storageBucket: 'photog-49b18.appspot.com',
	messagingSenderId: '1004316111084',
	appId: '1:1004316111084:web:d56787ffce670e51ccf5c9',
	measurementId: 'G-3BQTCJQHZ8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const photogStorage = firebase.storage();
const photogFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { photogStorage, photogFireStore, timestamp };
