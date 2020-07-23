import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgfnjfebJMbU5y_0724duv6wFoTjFlgpA",
  authDomain: "cart-7ce96.firebaseapp.com",
  databaseURL: "https://cart-7ce96.firebaseio.com",
  projectId: "cart-7ce96",
  storageBucket: "cart-7ce96.appspot.com",
  messagingSenderId: "520967307352",
  appId: "1:520967307352:web:b18d13bc1b3bdc28298a2d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

