import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import 'firebase/firestore'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


const config = {
  apiKey: "AIzaSyDXWuwPCISc0-PGMrBCkM25-C1NPYfVTyM",
  authDomain: "cloud-firestore-6a8ce.firebaseapp.com",
  databaseURL: "https://cloud-firestore-6a8ce.firebaseio.com",
  projectId: "cloud-firestore-6a8ce",
  storageBucket: "gs://cloud-firestore-6a8ce.appspot.com",
  messagingSenderId: "470804234352"
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
