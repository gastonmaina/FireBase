import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';


export default {
    initializeApp,
    getDatabase, 
    ref, 
    push, 
    onValue, 
    remove, 
    update,
    databaseURL: "https://otmanagment-c3c12-default-rtdb.firebaseio.com/" //"https://hannitahotel-default-rtdb.firebaseio.com/",
    nombreBaseDeDatos: "OT",
    gmaina: "1234"
}
