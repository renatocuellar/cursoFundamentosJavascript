/*camelCase
Sabes por que las variables y funciones comienzan en minúscula pero al agregarle una nueva palabra se comienza en mayúscula ?
Una buena practica es que las variables o funciones sean descriptivas.
Y como las haces mas descriptivas, agregándole mas información a tu variable o función, pero
JS no permite declarar variables con espacios entre las palabras
Por lo que se debes declarar la información de forma unida
Por esto la comunidad a tomado la sintaxis camelCase por convención en JS
camelCase: es un tipo de escritura donde las palabras están compuestas y cada palabra agregada comienza en mayúscula
*/

var nombre = 'Renato', apellido = 'Cuellar';

//toUpperCase vuelve todo en mayuscula y toLowerCase vuelve todo en minuscula

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

// Tener mucho cuidado con la sintaxis

console.log(nombreEnMayusculas + ' '+ apellidoEnMinusculas)

// Para saber cualquier de las letras del nombre o apellido, existe charAt y luego le indicamos la posición.

var primeraLetraDelNombre = nombre.charAt(0)

// podemos preguntar cuantas letras tene un string

var cantidadDeLetrasNombre = nombre.length

// También podemos concatenar dos varibles que lleven strings

/* var nombreCompleto = nombre + ' ' +apellido */

// la interpolación de texto es una nueva manera de concatenar strings, es mucho más sencilla

// Lo importante de esta nueva forma es hacer con las comilla invertidas o comillas francesas "alt gr + }"

var nombreCompleto = `${nombre} ${apellido}`

// cuando no sabemos que nombre darle al string podemos solo escribir el str

var str = nombre.substr(1, 3)

// RETO, traer siempre la última letra del nombre.

var nombre = 'Alan Santiago'
var ultimaLetra = nombre.slice(-1)

