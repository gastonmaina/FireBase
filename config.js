import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';


const firebaseConfig = {
  apiKey: "AIzaSyAKOXVaphyQrHW9vrMf-9PKRHfPCqr2-8M",
  authDomain: "otmanagment-c3c12.firebaseapp.com",
  databaseURL: "https://otmanagment-c3c12-default-rtdb.firebaseio.com",
  projectId: "otmanagment-c3c12",
  storageBucket: "otmanagment-c3c12.firebasestorage.app",
  messagingSenderId: "242647938612",
  appId: "1:242647938612:web:56f27b21169ea3b32d7c61"
};

export default {
    initializeApp,
    getDatabase, 
    ref, 
    push, 
    onValue, 
    remove, 
    update,
    firebaseConfig,
    nombreBaseDeDatos: "OT",
    gmaina: "1234"
}

//databaseURL: "https://otmanagment-c3c12-default-rtdb.firebaseio.com/", //"https://hannitahotel-default-rtdb.firebaseio.com/",
