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
    databaseURL: "https://hannitahotel-default-rtdb.firebaseio.com/",
    nombreBaseDeDatos: "PendingsList",
    usuarios: {
        "gmaina@biomas.net": {
            "rol": "operador",
            "password": "1234"
        },
        "jalasia@biomas.net": {
            "rol": "supervidor",
            "password": "1111"
        }
    }
}
