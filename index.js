import config from "./config.js"

const navbarNav$ = document.getElementById("navbarNav")
const pulsadorLogin$ = document.getElementById("pulsadorLogin")
const pulsadorAviso$ = document.getElementById("pulsadorAviso")
const pulsadorOrdenes$ = document.getElementById("pulsadorOrdenes")
const pulsadorHistorico$ = document.getElementById("pulsadorHistorico")
const pulsadorKPI$ = document.getElementById("pulsadorKPI")

const loginScreen$ = document.getElementById("loginScreen")
const avisoScreen$ = document.getElementById("avisoScreen")
const ordenesScreen$ = document.getElementById("ordenesScreen")
const historicoScreen$ = document.getElementById("historicoScreen")
const kpiScreen$ = document.getElementById("kpiScreen")

const ut$ = document.getElementById("ut")
const especialidad$ = document.getElementById("especialidad")
const tipo$ = document.getElementById("tipo")
const repetitividad$ = document.getElementById("repetitividad")
const fecha_fin$ = document.getElementById("fecha_fin")
const detalle$ = document.getElementById("detalle")
const fecha_solucion$ = document.getElementById("fecha_solucion")
const btnAgregar$ = document.getElementById("btnAgregar")

const filasTabla$ = document.getElementById("filasTabla")

const app = config.initializeApp(config.firebaseConfig)
const database = config.getDatabase(app)
const toDoListinDB = config.ref(database, `${config.nombreBaseDeDatos}`)

let datosInDB;

config.onValue(toDoListinDB, (snapshot) => {
    if (snapshot.exists()) {
        datosInDB = Object.entries(snapshot.val())
        console.log(datosInDB)
        
        filasTabla$.innerHTML = ""
        for(let i=0; i<datosInDB.length;i++){
            let tr = document.createElement("tr")
            let th_ut = document.createElement("th")
            th_ut.textContent = datosInDB[i][1].ut
            tr.appendChild(th_ut)
            let th_esp = document.createElement("th")
            th_esp.textContent = datosInDB[i][1].especialidad
            tr.appendChild(th_esp)
            let th_tipo = document.createElement("th")
            th_tipo.textContent = datosInDB[i][1].tipo
            tr.appendChild(th_tipo)
            let th_fecha = document.createElement("th")
            th_fecha.textContent = datosInDB[i][1].fecha
            tr.appendChild(th_fecha)
            let th_detalle = document.createElement("th")
            th_detalle.textContent = datosInDB[i][1].detalle
            th_detalle.classList.add("d-none", "d-md-table-cell")
            tr.appendChild(th_detalle)
            tr.classList.add("celeste")
            filasTabla$.appendChild(tr)
            
        }
    }
})

btnAgregar$.addEventListener('click', ()=>{
    let data = {
        "ut": ut$.value,
        "especialidad": especialidad$.value,
        "tipo": tipo$.value,
        "detalle": detalle$.value
    }
    config.agregar(data)
})

pulsadorLogin$.addEventListener('click', ()=>{
    navbarNav$.classList.remove("show")
    pulsadorLogin$.classList.add("active")
    pulsadorAviso$.classList.remove("active")
    pulsadorOrdenes$.classList.remove("active")
    pulsadorHistorico$.classList.remove("active")
    pulsadorKPI$.classList.remove("active")

    loginScreen$.classList.add('cuadroActivo')
    loginScreen$.classList.remove('cuadroInactivo')

    avisoScreen$.classList.remove('cuadroActivo')
    avisoScreen$.classList.add('cuadroInactivo')
    
    ordenesScreen$.classList.remove('cuadroActivo')
    ordenesScreen$.classList.add('cuadroInactivo')

    historicoScreen$.classList.remove('cuadroActivo')
    historicoScreen$.classList.add('cuadroInactivo')

    kpiScreen$.classList.remove('cuadroActivo')
    kpiScreen$.classList.add('cuadroInactivo')

})

pulsadorAviso$.addEventListener('click', ()=>{
    navbarNav$.classList.remove("show")
    pulsadorLogin$.classList.remove("active")
    pulsadorAviso$.classList.add("active")
    pulsadorOrdenes$.classList.remove("active")
    pulsadorHistorico$.classList.remove("active")
    pulsadorKPI$.classList.remove("active")

    loginScreen$.classList.remove('cuadroActivo')
    loginScreen$.classList.add('cuadroInactivo')

    avisoScreen$.classList.add('cuadroActivo')
    avisoScreen$.classList.remove('cuadroInactivo')
    
    ordenesScreen$.classList.remove('cuadroActivo')
    ordenesScreen$.classList.add('cuadroInactivo')

    historicoScreen$.classList.remove('cuadroActivo')
    historicoScreen$.classList.add('cuadroInactivo')

    kpiScreen$.classList.remove('cuadroActivo')
    kpiScreen$.classList.add('cuadroInactivo')
})

pulsadorOrdenes$.addEventListener('click', ()=>{
    navbarNav$.classList.remove("show")
    pulsadorLogin$.classList.remove("active")
    pulsadorAviso$.classList.remove("active")
    pulsadorOrdenes$.classList.add("active")
    pulsadorHistorico$.classList.remove("active")
    pulsadorKPI$.classList.remove("active")

    loginScreen$.classList.remove('cuadroActivo')
    loginScreen$.classList.add('cuadroInactivo')

    avisoScreen$.classList.remove('cuadroActivo')
    avisoScreen$.classList.add('cuadroInactivo')
    
    ordenesScreen$.classList.add('cuadroActivo')
    ordenesScreen$.classList.remove('cuadroInactivo')

    historicoScreen$.classList.remove('cuadroActivo')
    historicoScreen$.classList.add('cuadroInactivo')

    kpiScreen$.classList.remove('cuadroActivo')
    kpiScreen$.classList.add('cuadroInactivo')
})

pulsadorHistorico$.addEventListener('click', ()=>{
    navbarNav$.classList.remove("show")
    pulsadorLogin$.classList.remove("active")
    pulsadorAviso$.classList.remove("active")
    pulsadorOrdenes$.classList.remove("active")
    pulsadorHistorico$.classList.add("active")
    pulsadorKPI$.classList.remove("active")

    loginScreen$.classList.remove('cuadroActivo')
    loginScreen$.classList.add('cuadroInactivo')

    avisoScreen$.classList.remove('cuadroActivo')
    avisoScreen$.classList.add('cuadroInactivo')
    
    ordenesScreen$.classList.remove('cuadroActivo')
    ordenesScreen$.classList.add('cuadroInactivo')

    historicoScreen$.classList.add('cuadroActivo')
    historicoScreen$.classList.remove('cuadroInactivo')

    kpiScreen$.classList.remove('cuadroActivo')
    kpiScreen$.classList.add('cuadroInactivo')
})

pulsadorKPI$.addEventListener('click', ()=>{
    navbarNav$.classList.remove("show")
    pulsadorLogin$.classList.remove("active")
    pulsadorAviso$.classList.remove("active")
    pulsadorOrdenes$.classList.remove("active")
    pulsadorHistorico$.classList.remove("active")
    pulsadorKPI$.classList.add("active")

    loginScreen$.classList.remove('cuadroActivo')
    loginScreen$.classList.add('cuadroInactivo')

    avisoScreen$.classList.remove('cuadroActivo')
    avisoScreen$.classList.add('cuadroInactivo')
    
    ordenesScreen$.classList.remove('cuadroActivo')
    ordenesScreen$.classList.add('cuadroInactivo')

    historicoScreen$.classList.remove('cuadroActivo')
    historicoScreen$.classList.add('cuadroInactivo')

    kpiScreen$.classList.add('cuadroActivo')
    kpiScreen$.classList.remove('cuadroInactivo')
})


// config.agregar("Termito")
// config.actualizar("-ODrF8utbcgX8cOV_BEx")
// config.eliminar("-ODrF8utbcgX8cOV_BEx")





















