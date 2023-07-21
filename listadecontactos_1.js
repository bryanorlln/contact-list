// creamos la lista de contactos
let contactos =[
    {
        identidad: "050219982547",
        nombre:"Josue Alberto",
        apellido:"Gutierrez Mendoza",
        tel: "54289624",
        ciudad: "San Pedro Sula",
        direccion: "Barrio Cabañas, casa 918"
    }
]

// modificamos la funcion para agregar los nuevos objetos de contactos
function aggContacto(identidad,nombre,apellido,tel,ciudad,direccion) {
    contactos.push({identidad,nombre,apellido,tel,ciudad,direccion});

}

//realizamos lo mismo modificando objetos del contacto
function borrarContacto(identidad) {
   contactos = contactos.filter(contacto => contacto.identidad != identidad);
}

//dejamos tal cual
function imprimirContacto() {
    console.log("Lista de contactos actuales");
    console.log(contactos);
    }


//creamos la funcion actualizar contacto
function actualizarContacto(identidad,nombre,apellido,tel,ciudad,direccion){
    index = contactos.findIndex(contacto => contacto.identidad === identidad);
    if (index != -1) {
        contactos[index] = [nombre,apellido,tel,ciudad,direccion];
        
    }
}

//Imprimimos en la consola

aggContacto("050119972548","Adan Isai","Martinez Leon","99084527","El Progreso","Barrio El Centro, casa 775");
console.log(contactos);

borrarContacto("050219982547");
console.log(contactos);

actualizarContacto("050119972548","Adan Isai","Martinez Leon","99084527","El Carrizal","Barrio La Kenedy, casa 225");
console.log(contactos);

imprimirContacto();
