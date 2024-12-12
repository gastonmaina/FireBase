import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyAbxJ1APN-CGuS1V2nNSF3gXbJpRWHOpmA",
    authDomain: "hannitahotel.firebaseapp.com",
    databaseURL: "https://hannitahotel-default-rtdb.firebaseio.com",
    projectId: "hannitahotel",
    storageBucket: "hannitahotel.firebasestorage.app",
    messagingSenderId: "1070055211911",
    appId: "1:1070055211911:web:8f13ed9501b625f8bf0922"
};

const nombreBaseDeDatos = 'otBiomas/';
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const toDoListinDB = ref(database, nombreBaseDeDatos)

function agregar(objeto) {
    push(toDoListinDB, objeto)
    .then(() => console.log("agregado correctamente"))
    .catch(() => console.log("no se pudo guardar"))

}

function actualizar(id) {
    let toDoListinDBelemento = ref(database, `${nombreBaseDeDatos}${id}`)

    const datosNuevos = {
        "edad": "11"
    };

    update(toDoListinDBelemento, datosNuevos)
        .then(() => {
            console.log("Datos actualizados correctamente.");
        })
        .catch((error) => {
            console.error("Error al actualizar los datos: ", error);
        });
}

function eliminar(id) {
    let toDoListinDBelemento = ref(database, `${nombreBaseDeDatos}${id}`)

    remove(toDoListinDBelemento)
        .then(() => {
            console.log("Dato eliminado.");
        })
        .catch((error) => {
            console.error("Error al actualizar los datos: ", error);
        });
}

export default {
    firebaseConfig,
    initializeApp,
    getDatabase,
    ref,
    push,
    onValue,
    remove,
    update,
    agregar,
    actualizar,
    eliminar,
    databaseURL: "https://hannitahotel-default-rtdb.firebaseio.com/",
    nombreBaseDeDatos: "otBiomas/",
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
