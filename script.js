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

function gestionAlumnos(array, opcion, num, ed) {
  switch (opcion) {
    case "añadir":
      console.log(`Se ha añadido al alumno ${num} de ${ed} años:`);
      array.push({ nombre: num, edad: ed });
      console.log(array);
      break;

    case "actualizar":
      // if (Object.values(array).find(al => al.nombre === num)) {
      //   const copia = [...array];
      //   let al = copia.find(alumno => alumno.nombre === num);
      //   al.nombre = Nuevonum;
      //   console.log(`Se ha actualizado al alumno ${num} con los siguientes datos:`, copia.find(al => al.nombre === Nuevonum))
      // }else {
      //   console.log("No se encuentra entre los alumnos");
      // }
      return array.map(alumno => alumno.nombre === num ? { ...alumno, ...{edad:25} } : alumno);
      break;

    default:
      console.log("Estos son los alumnos que tienen más de 18 años:", array.filter(al => al.edad > 18));
      break;
  }
}
console.log("");
//1️⃣3️⃣ Análisis de Palabras en un Texto

const texto = 'El sol brilla sobre el cielo azul y brillante';

const palabras = [];
let palabra = '';

for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== ' ') {
        palabra += texto[i]; // Agrega el carácter a la palabra actual
    } else {
        if (palabra) { // Si hay una palabra acumulada, la agregamos al array
            palabras.push(palabra);
            palabra = ''; // Reiniciamos la palabra
        }
    }
}

// Agregamos la última palabra si existe
if (palabra) {
    palabras.push(palabra);
}

console.log("Este es el texto comvirtiendo cada palabra en un elemento de un array ",palabras);

console.log("Estas son las palabras que tienen mas de 5 letras", palabras.filter(p => p.length >= 5));

console.log("Estas son las palabras ordenadas de forma descendiente por longitud", palabras.sort((a,b) => b.length - a.length));
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
























