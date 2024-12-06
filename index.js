import config from '../config.js'


const appSetting = {
    databaseURL: config.databaseURL
}
const app = config.initializeApp(appSetting)
const database = config.getDatabase(app) 
const toDoListinDB = config.ref(database, `${config.nombreBaseDeDatos}`)

const btnAgregar$ = document.getElementById("btnAgregar")
const ut$ = document.getElementById("ut") 
const tipo$ = document.getElementById("tipo") 
const detalle$ = document.getElementById("detalle") 
const fecha$ = document.getElementById("fecha")

btnAgregar$.addEventListener("click", function(){
    let datos = {
        "UT": ut$.value,
        "TIPO": tipo$.value,
        "DETALLE": detalle$.value.toUpperCase(),
        "FECHA": fecha$.value
    }
    config.push(toDoListinDB, datos)
    ut$.value=""
    tipo$.value=""
    detalle$.value=""
    fecha.value="";
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
