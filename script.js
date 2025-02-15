//1️⃣ Gestión de Inventario

const inventario = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 50, precio: 20 },
  { nombre: 'Ratón', cantidad: 30, precio: 10 }
];

//2️⃣ Análisis de Notas de Estudiantes

const estudiantes = [
  { nombre: 'Juan', nota: 8 },
  { nombre: 'Ana', nota: 5 },
  { nombre: 'Carlos', nota: 7 }
];


//3️⃣ Historial de Transacciones Bancarias

const transacciones = [200, -50, -100, 350, -20];

//4️⃣ Gestión de Tareas (To-Do List)

const tareas = [
  { tarea: 'Comprar leche', completada: false },
  { tarea: 'Estudiar JavaScript', completada: true }
];

//5️⃣ Operaciones con Nombres de Usuarios

const nombres = ['Ana', 'Juan', 'Pedro', 'Andrés'];

//6️⃣ Análisis de Datos Climáticos

const temperaturas = [22, 28, 18, 15, 32, 25];

//7️⃣ Combinar Listas de Contactos (Operador Spread)

const contactos1 = ['Juan', 'Carlos', 'Ana'];
const contactos2 = ['Ana', 'Pedro', 'Luis'];

//8️⃣ Gestión de Carrito de Compras

const carrito = [
  { producto: 'Laptop', precio: 800 },
  { producto: 'Ratón', precio: 20 }
];

//9️⃣ Filtrado de Libros por Autor y Año

const libros = [
  { titulo: 'JavaScript Avanzado', autor: 'Juan Pérez', año: 2019 },
  { titulo: 'JavaScript Básico', autor: 'Carlos López', año: 2008 }
];

console.log("Estos son los libros publicados después de 2010: ", libros.filter(libro => libro.año > 2010));
console.log("El primer libro del autor Carlos López: ", libros.find(libro => libro.autor === "Carlos López"));
console.log("Estos son los libros ordenados según su año de publicación: ", libros.sort((a, b) => a.año - b.año));

console.log("");

//🔟 Gestión de Inscripciones a un Evento

//Siendo una constante como seria¿?
let participantes = ['Juan', 'Ana', 'Pedro', 'Luis'];

function gestionarParticipantes(array, opcion, texto) {
  switch (opcion) {
    case "añadir":
      if (texto != "") {
        console.log(`Se ha añadido ${texto} a los participantes`); array.push(texto)
      }
      break;
    case "eliminar":
      if (texto != "" && array.includes(texto)) {
        participantes = array.filter(participante => participante !== texto)
        console.log(`Se ha eliminado al participante ${texto}: ${participantes}`);
      } else {
        console.log("No se encuentra entre los participantes");
      }
      // if (texto != "") {
      //  let el = array.find(participante => participante === texto)
      //  console.log(el);
      // }
      break;
    case "filtrar":
      let filtro = array.filter(participante => participante.includes(texto))
      console.log(`Participantes que contienen la letra ${texto}`, filtro);
      break;

    default:
      let todos = array.join(", ");
      console.log(todos);
      break;
  }
}
//gestionarParticipantes(participantes, "añadir", "Gloria")
//gestionarParticipantes(participantes, "eliminar", "Gloria")
//gestionarParticipantes(participantes, "filtrar", "a")
//gestionarParticipantes(participantes)
console.log("");
//1️⃣1️⃣ Estadísticas de Redes Sociales

const publicaciones = [
  { likes: 50, comentarios: 10 },
  { likes: 200, comentarios: 30 },
  { likes: 120, comentarios: 20 }
];

//i es el acummulador / pub es el array de objetos / el 0 es el valor inicial del acumulador
const totalLikes = publicaciones.reduce((i, pub) => i + pub.likes, 0);
console.log("Total de likes:", totalLikes);

const publicacionesFiltradas = publicaciones.filter(pub => pub.likes > 100);
console.log("Publicaciones con más de 100 likes:", publicacionesFiltradas);

// Ordenar publicaciones de mayor a menor popularidad (por likes)
const publicacionesOrdenadas = publicacionesFiltradas.sort((a, b) => b.likes - a.likes);
console.log("Publicaciones ordenadas por popularidad:", publicacionesOrdenadas);
console.log("");
//1️⃣2️⃣ Sistema de Gestión de Alumnos (Operador Spread + Objetos)

const alumnos = [
  { nombre: 'Juan', edad: 20 },
  { nombre: 'Ana', edad: 17 }
];

//1️⃣3️⃣ Análisis de Palabras en un Texto

const texto = 'El sol brilla sobre el cielo azul y brillante';

//1️⃣4️⃣ Simulación de una Cola de Atención

const cola = ['Juan', 'Ana', 'Carlos'];

//1️⃣5️⃣ Gestión de Inventario de Productos (Avanzado con Spread)

const inventario1 = [
  { nombre: 'Laptop', cantidad: 10, precio: 800 },
  { nombre: 'Teclado', cantidad: 20, precio: 30 }
];

const inventario2 = [
  { nombre: 'Ratón', cantidad: 15, precio: 10 },
  { nombre: 'Monitor', cantidad: 5, precio: 200 }
];
























