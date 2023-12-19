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
const userNeeds$ = document.getElementById("userNeeds") 
const pendings$ = document.getElementById("pendings")

btnAgregar$.addEventListener("click", function(){
    push(toDoListinDB, userNeeds$.value)
    userNeeds$.value=""
})

onValue(toDoListinDB, function(snapshot){
    if(snapshot.exists()){
        let datosInDB = Object.entries(snapshot.val())        
        pendings$.innerHTML = ""    
        for(let i=0; i<datosInDB.length; i++){
            addItemToList(datosInDB[i])
        }
    }else pendings$.innerHTML = "No hay elementos pendientes..."
    

})

function addItemToList(datos){    
    let newItem$ = document.createElement("li")
    newItem$.innerText = datos[1]
    newItem$.setAttribute("id", datos[0])
    newItem$.addEventListener("click", function(){
        let exactLocation = ref(database, `PendingsList/${newItem$.id}`)
        console.log(newItem$.id)
        remove(exactLocation)
    })
    pendings$.append(newItem$)
}