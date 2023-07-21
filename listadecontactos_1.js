// creamos la lista de contactos
let contactos = [
    {nombre: "Bryan Orellana",
    telefono: "012345678"},
    {nombre: "Francisco Avila",
    telefono: "45218673"},
    {nombre: "Javier Rodriguez",
    telefono: "87549315"} 
]
//creamos funcion para agregar contacto
function aggContacto(nombre,telefono) {
    contactos.push({nombre,telefono})

}

//creamos funcion para borrar el contacto
function borrarContacto(nombre) {
    contactos = contactos.filter(contacto => contacto.nombre != nombre);
}

//creamos funcion para imprimir todos los contactos
function imprimirContacto() {
    console.log("Lista de contactos actuales");
    console.log(contactos);
}


aggContacto("Alberto Carcamo","99052486");
console.log(contactos);
borrarContacto("Alberto Carcamo");
console.log(contactos);

imprimirContacto();
