import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const appSetting = {
    // databaseURL: "https://todoapp-278d1-default-rtdb.firebaseio.com/"
    databaseURL: "https://hannitahotel-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSetting)
const database = getDatabase(app) 
const toDoListinDB = ref(database, "PendingsList")

const btnAgregar$ = document.getElementById("btnAgregar")
const ut$ = document.getElementById("ut") 
const tipo$ = document.getElementById("tipo") 
const detalle$ = document.getElementById("detalle") 
const pendings$ = document.getElementById("pendings")

btnAgregar$.addEventListener("click", function(){
    let datos = {
        "UT": ut$.value,
        "TIPO": tipo$.value,
        "DETALLE": detalle$.value.toUpperCase()
    }
    push(toDoListinDB, datos)
    ut$.value=""
    tipo$.value=""
    detalle$.value=""
})

// onValue(toDoListinDB, function(snapshot){
//     if(snapshot.exists()){
//         let datosInDB = Object.entries(snapshot.val())    
//         console.log(datosInDB)    
//         pendings$.innerHTML = ""    
//         for(let i=0; i<datosInDB.length; i++){
//             console.log(datosInDB[i][1].detalle)
//             addItemToList(datosInDB[i][1].detalle)
//         }
//     }else pendings$.innerHTML = "No hay elementos pendientes..."
    

// })

// function addItemToList(datos){    
//     let newItem$ = document.createElement("li")
//     newItem$.innerText = datos
//     newItem$.setAttribute("id", datos)
//     newItem$.addEventListener("click", function(){
//         let exactLocation = ref(database, `PendingsList/${newItem$.id}`)
//         console.log(newItem$.id)
//         remove(exactLocation)
//     })
//     pendings$.append(newItem$)
// }
