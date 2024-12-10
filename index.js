import config from '../config.js'

let activeUser=""

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
const user$ = document.getElementById("user")
const pass$ = document.getElementById("pass")
const modalLogin$ = document.getElementById("modalLogin")
const especialidad$ = document.getElementById("especialidad")
const repetitividad$ = document.getElementById("repetitividad")
const labelRepetitividad$ = document.getElementById("labelRepetitividad")
const usuarioActivo$ = document.getElementById("usuarioActivo")
// const fecha_inicio$ = document.getElementById("fecha_inicio")
const labelFechaFin$ = document.getElementById("labelFechaFin")
const fecha_fin$ = document.getElementById("fecha_fin")


tipo$.addEventListener("change", function(){
    if(tipo$.value=="PREVENTIVO") 
    {
        labelRepetitividad$.classList.remove(['tachar'])
        repetitividad$.removeAttribute('disabled')
        labelFechaFin$.classList.remove(['tachar'])
        fecha_fin$.removeAttribute('disabled')
    }
        else{
        repetitividad$.value = "CORRECTIVO"
        labelRepetitividad$.classList.add(['tachar'])
        repetitividad$.setAttribute('disabled', 'disabled')
        labelFechaFin$.classList.add(['tachar'])
        fecha_fin$.setAttribute('disabled', 'disabled')
} 
        
})

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
        "ID": Date.now(),
        "USUARIO_GENERADOR": activeUser,
        "ESPECIALIDAD": especialidad$.value,
        "REPETITIVIDAD": {}
    }

    if(ut$.value !="" && especialidad$.value !="" && tipo$.value !="" && detalle$.value !="" && fecha$.value !=""){
        if(tipo$.value === "CORRECTIVO"){
            datos.REPETITIVIDAD = {
                "FRECUENCIA":"",
                "FECHA_INICIO": "",
                "FECHA_FIN": ""
            }
        }
        else
            {
                if(repetitividad$.value != ""){
                switch (repetitividad$.value) {
                    case "SEMANAL": datos.REPETITIVIDAD = {
                        "FRECUENCIA": "SEMANAL"
                    }                        
                    break;
                    
                    case "QUINCENAL": datos.REPETITIVIDAD = {
                        "FRECUENCIA": "QUINCENAL"
                    }
                    break;

                    case "MENSUAL": datos.REPETITIVIDAD = {
                        "FRECUENCIA": "MENSUAL"
                    }
                    break

                    case "TRIMESTRAL": datos.REPETITIVIDAD = {
                        "FRECUENCIA": "TRIMESTRAL"
                    }
                    break

                    case "SEMESTRAL": datos.REPETITIVIDAD = {
                        "FRECUENCIA": "SEMESTRAL"
                    }
                    break

                    case "ANUAL": datos.REPETITIVIDAD = {
                        "FRECUENCIA": "ANUAL"
                    }
                    break

                    default:
                        break;
                }

            }
        }
        config.push(toDoListinDB, datos)
        
        limpiarCampos()
    }
})

btnCancelar$.addEventListener("click", ()=>{
    // window.close()
    let toDoListinDBelemento = config.ref(database, `${config.nombreBaseDeDatos}/-ODmZSMuK2SzI14K-wOd`)

// Datos que deseas actualizar
const updates = {
  ASIGNADO: "Juan Perez",
  COMENTARIOS_ASIGNADO: "Revisar urgentemente"
};

// Actualiza los datos
config.update(toDoListinDBelemento, updates)
  .then(() => {
    console.log("Datos actualizados correctamente.");
  })
  .catch((error) => {
    console.error("Error al actualizar los datos: ", error);
  });
})

btnpass$.addEventListener('click', ()=>{
    if(config.usuarios[`${user$.value}`]){
        if(config.usuarios[`${user$.value}`].password === pass$.value){
            console.log(config.usuarios[`${user$.value}`])
            activeUser=user$.value;
            usuarioActivo$.innerHTML = `USUARI@: ${activeUser} - PERFIL DE ACCESO: ${config.usuarios[`${user$.value}`].rol.toUpperCase()} `
            modalLogin$.classList.add("noActive")
        }else{
            user$.value=""
            pass$.value=""
        }
    }
    else{
        user$.value=""
        pass$.value=""
    }
    
    




})

function limpiarCampos() {
    ut$.value=""
    tipo$.value=""
    detalle$.value=""
    fecha$.value="";
    especialidad$.value=""
    repetitividad$.value=""
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
