// Definimos un objeto Empleado
function Empleado(nombre, apellido,edad, cargo ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    
}

//objeto para gestionar a los empleados
const GestionEmpleados = {
    empleados: [],

    // Método para agregar un nuevo empleado
    agregarEmpleado: function(nombre, apellido,edad, cargo) {
        const empleado = new Empleado(nombre, apellido,edad, cargo);
        this.empleados.push(empleado);
    },

    // Método para buscar un empleado por nombre
    buscarEmpleadoPorNombre: function(nombre) {
        return this.empleados.find(empleado => empleado.nombre === nombre);
    },
//Buscar por cargo
BuscarEmpleadoPorCargo:function(cargo){
    return this.empleados.find(empleado => empleado.cargo === cargo);
},
    // Método para calcular la cantidad total de empleados
    cantidadTotalEmpleados: function() {
        return this.empleados.length;
    },

    // Método para listar todos los empleados
    listarEmpleados: function() {
        console.log("Lista de Empleados:");
        this.empleados.forEach(empleado => {
            console.log(`Nombre: ${empleado.nombre} ${empleado.apellido}, Edad: ${empleado.edad}  Cargo: ${empleado.cargo}`);
        });
    },
    // Método para eliminar un empleado por nombre
    eliminarEmpleadoPorNombre: function(nombre) {
        const indiceEmpleado = this.empleados.findIndex(empleado => empleado.nombre === nombre);
        if (indiceEmpleado !== -1) {
            this.empleados.splice(indiceEmpleado, 1);
            console.log(`El empleado ${nombre} ha sido eliminado.`);
        } else {
            console.log(`No se encontró al empleado ${nombre}.`);
        }
    }
};

// Agrego  empleados 
GestionEmpleados.agregarEmpleado("Juan", "Perez",35 , "Desarrollador");
GestionEmpleados.agregarEmpleado("Maria", "Gomez",36, "Diseñador");
GestionEmpleados.agregarEmpleado("Pedro", "Rodriguez",40, "Gerente");
GestionEmpleados.agregarEmpleado("Ana","Lopez" ,28, "Tester" );
GestionEmpleados.agregarEmpleado("Oscar", "Roca", 41,'Analista');
GestionEmpleados.agregarEmpleado("Jorge", "Rojas", 32,'Desarrollador');
GestionEmpleados.agregarEmpleado("Jasmin", "Irala", 26,'Desarrollador');

// Elimino un empleado
GestionEmpleados.eliminarEmpleadoPorNombre("Juan");
GestionEmpleados.listarEmpleados();

// Probando las funciones
console.log("Cantidad Total de Empleados:", GestionEmpleados.cantidadTotalEmpleados());
console.log("Información de Juan:", GestionEmpleados.buscarEmpleadoPorNombre("Juan"));
console.log("Información de Ana:", GestionEmpleados.buscarEmpleadoPorNombre("Ana"));
console.log('Informacion de Oscar',GestionEmpleados.BuscarEmpleadoPorCargo('Desarrollador') );
GestionEmpleados.listarEmpleados();
