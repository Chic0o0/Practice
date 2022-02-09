console.log("connected");

const formString= window.location.search;

let params = new URLSearchParams(formString);
let keys = params.keys();
let values = params.values();

let cont = document.getElementById("cont");
let tabla = document.createElement("table");

for (const key of keys) {
    let columna = document.createElement("td");
    columna.textContent = key;
     
    for (const value of values) {
        let fila= document.createElement("tr");
        fila.textContent = value;
        columna.append(fila);
        break;
    }
    
    tabla.append(columna);
}

cont.append(tabla);

for (const val of values) console.log(val);