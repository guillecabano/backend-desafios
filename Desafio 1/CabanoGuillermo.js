//Se crea el constructor

class Usuario {
    constructor(nombre, apellidos,libros, mascotas){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.libros= libros;
        this.mascotas= mascotas;
    }

    //Funcion para mostrar el nombre del usuario
    getFullName() {
        return "Mi Nombre es: " + this.nombre + " " + this.apellidos
    }

    //Funcion para agregar libros
    addBook(nombreLibro, nombreAutor) {
        this.libros.push({nombre: nombreLibro, autor: nombreAutor})
    }

    //Funcion para mostrar el nombre de los libros
    getNameBooks(){
        return this.libros.map(item => item.nombre);
    }

    //Funcion para agregar una mascota
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    //Funcion para contar las mascotas
    countMascotas(){
        return "El usuario tiene: " + this.mascotas.length + " Mascotas"
    }
    
}

//se crea el usuario
let usuario1 = new Usuario("Carlos","Perez",[{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}], ['Simon', 'Rokko'])

//Se muestra el nombre completo del usuario
console.log(usuario1.getFullName());

//Se muestran en nombre de los libros
console.log(usuario1.getNameBooks())

//Se agrega un libro y se muestra la lista completa
usuario1.addBook('el señor de los anillos', 'rr martin')
console.log(usuario1.libros)

//Se agrega una mascota y se muesta la lista de ellas
usuario1.addMascota("Manchas")
console.log(usuario1.mascotas)

//Se cuenta la cantidad de mascotas
console.log(usuario1.countMascotas())