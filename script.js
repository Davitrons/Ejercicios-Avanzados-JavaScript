//1️⃣ Gestión de Inventario

const inventario = [
  { nombre: "Laptop", cantidad: 10, precio: 800 },
  { nombre: "Teclado", cantidad: 50, precio: 20 },
  { nombre: "Ratón", cantidad: 30, precio: 10 },
];

function gestionInventario(inventario, opcion, producto) {
  switch (opcion) {
    case "añadir":
      if (producto && producto.nombre && producto.cantidad && producto.precio) {
        inventario.push(producto);
        console.log(`Producto ${producto.nombre} añadido.`);
      } else {
        console.log("Información del producto incompleta.");
      }
      break;

    case "eliminar":
      if (producto && producto.nombre) {
        const index = inventario.findIndex((item) => item.nombre === producto.nombre);
        if (index !== -1) {
          inventario.splice(index, 1);
          console.log(`Producto ${producto.nombre} eliminado.`);
        } else {
          console.log("Producto no encontrado.");
        }
      }
      break;

    case "filtrarPrecio":
      const filtroPrecio = inventario.filter(item => item.precio > producto.precio);
      console.log('Productos con precio mayor a', producto.precio, ':', filtroPrecio);
      break;

    case "ordenar":
      const inventarioOrdenado = [...inventario].sort((a, b) => b.cantidad - a.cantidad);
      console.log('Inventario ordenado por cantidad (mayor a menor):', inventarioOrdenado);
      break;

    default:
      console.log("Acción no válida.");
  }
}

// gestionInventario(inventario, "añadir", { nombre: 'Monitor', cantidad: 15, precio: 150 });

// gestionarInventario(inventario, 'eliminar', { nombre: 'Teclado' });

// gestionarInventario(inventario, 'filtrarPrecio', { precio: 100 });

// gestionarInventario(inventario, 'ordenarCantidad');

//2️⃣ Análisis de Notas de Estudiantes

const estudiantes = [
  { nombre: "Juan", nota: 8 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Carlos", nota: 7 },
];

const filtrarAlumnosNota = estudiantes.filter(alumno => alumno.nota >= 6);
console.log("Loa alumnos que aprobaron con mas de un 6", filtrarAlumnosNota);
let sum = 0;
estudiantes.forEach(estudiante => {
    sum += estudiante.nota;
});
let media = sum / estudiantes.length;
console.log("La nota media de toda la clase", media); //Math.round(media)

const ordenarAlumnosNota = estudiantes.sort((a,b) => b.nota - a.nota);

console.log("Los estudiantes de mayor a menor calificación",ordenarAlumnosNota);





//3️⃣ Historial de Transacciones Bancarias

const transacciones = [200, -50, -100, 350, -20];

//4️⃣ Gestión de Tareas (To-Do List)

const tareas = [
  { tarea: "Comprar leche", completada: false },
  { tarea: "Estudiar JavaScript", completada: true },
];

//5️⃣ Operaciones con Nombres de Usuarios

const nombres = ["Ana", "Juan", "Pedro", "Andrés"];

//6️⃣ Análisis de Datos Climáticos

const temperaturas = [22, 28, 18, 15, 32, 25];

//7️⃣ Combinar Listas de Contactos (Operador Spread)

const contactos1 = ["Juan", "Carlos", "Ana"];
const contactos2 = ["Ana", "Pedro", "Luis"];

//8️⃣ Gestión de Carrito de Compras

const carrito = [
  { producto: "Laptop", precio: 800 },
  { producto: "Ratón", precio: 20 },
];

//9️⃣ Filtrado de Libros por Autor y Año

const libros = [
  { titulo: "JavaScript Avanzado", autor: "Juan Pérez", año: 2019 },
  { titulo: "JavaScript Básico", autor: "Carlos López", año: 2008 },
];

//🔟 Gestión de Inscripciones a un Evento

const participantes = ["Juan", "Ana", "Pedro", "Luis"];

//1️⃣1️⃣ Estadísticas de Redes Sociales

const publicaciones = [
  { likes: 50, comentarios: 10 },
  { likes: 200, comentarios: 30 },
  { likes: 120, comentarios: 20 },
];

//1️⃣2️⃣ Sistema de Gestión de Alumnos (Operador Spread + Objetos)

const alumnos = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 17 },
];

//1️⃣3️⃣ Análisis de Palabras en un Texto

const texto = "El sol brilla sobre el cielo azul y brillante";

//1️⃣4️⃣ Simulación de una Cola de Atención

const cola = ["Juan", "Ana", "Carlos"];

//1️⃣5️⃣ Gestión de Inventario de Productos (Avanzado con Spread)

const inventario1 = [
  { nombre: "Laptop", cantidad: 10, precio: 800 },
  { nombre: "Teclado", cantidad: 20, precio: 30 },
];

const inventario2 = [
  { nombre: "Ratón", cantidad: 15, precio: 10 },
  { nombre: "Monitor", cantidad: 5, precio: 200 },
];
