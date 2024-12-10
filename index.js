import config from '../config.js'

const appSetting = {
    databaseURL: config.databaseURL
}
const app = config.initializeApp(appSetting)
const database = config.getDatabase(app) 
const toDoListinDB = config.ref(database, `${config.nombreBaseDeDatos}`)

const btnAgregar$ = document.getElementById("btnAgregar")
const btnCancelar$ = document.getElementById("btnCancelar")
const ut$ = document.getElementById("ut") 
const tipo$ = document.getElementById("tipo") 
const detalle$ = document.getElementById("detalle") 
const fecha$ = document.getElementById("fecha")
const btnpass$ = document.getElementById("btnPass")
const modalLogin$ = document.getElementById("modalLogin")
const body$ = document.getElementsByName("body")


btnAgregar$.addEventListener("click", function(){
    const fechaActual = new Date(); 
    const dia = fechaActual.getDate(); 
    const mes = fechaActual.getMonth() + 1;  
    const anio = fechaActual.getFullYear(); 
    const fechaFormateada = `${anio}-${mes}-${dia}`    
    let datos = {
        "UT": ut$.value,
        "TIPO": tipo$.value,
        "DETALLE": detalle$.value.toUpperCase(),
        "FECHA_SOLICITADA": fecha$.value,
        "FECHA_GENERADA": fechaFormateada,
        "ESTADO": "SIN TRATAMIENTO", //hace referecia a si esta sin tratamiento, asignada o cerrada
        "PLANIFICADOR": "", //hace referencia al jefe de turno que asigna la tarea
        "COMENTARIOS_PLANIFICADOR": "",
        "FECHA_PLANIFICADOR": "",
        "ASIGNADO": "",
        "COMENTARIOS_ASIGNADO":"",
        "FECHA_ASIGNADO":"", //HACE REFERENCIA A LA FECHA DE CIERRE
        "ID": Date.now()
    }    
    
    //config.push(toDoListinDB, datos)
    for(let i=0; i<100; i++){
        actualizar(datos);
    }

  
    
    limpiarCampos()
  
    
})

async function actualizar(datos){
    await config.push(toDoListinDB, datos)
}

btnCancelar$.addEventListener("click", ()=>{
    //window.close()
    config.update(['-ODlI4VA0m_nsnJb6W3v/ASIGNADO'] = "HOLA")
})

btnpass$.addEventListener('click', ()=>{
    modalLogin$.classList.add("noActive")
})

function limpiarCampos() {
    ut$.value=""
    tipo$.value=""
    detalle$.value=""
    fecha$.value="";
}

config.onValue(toDoListinDB, function(snapshot){
    if(snapshot.exists()){
        let datosInDB = Object.entries(snapshot.val())    
        console.log(datosInDB)    
        // pendings$.innerHTML = ""    
        // for(let i=0; i<datosInDB.length; i++){
        //     console.log(datosInDB[i][1].detalle)
        //     addItemToList(datosInDB[i][1].detalle)
        // }
    }
    // else pendings$.innerHTML = "No hay elementos pendientes..."
    })

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
