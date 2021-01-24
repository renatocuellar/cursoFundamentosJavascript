/*Vamos a empezar a trabajar con objetos, veremos cómo declararlos, cuáles son sus ventajas, 
cómo asignarles atributos y cómo trabajar con ellos dentro de las funciones.
Los objetos se definen delimitados mediante llaves {}
Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí por dos puntos “”:"". 
Los valores pueden ser de tipo string, número, booleano, etc. Cada atributo está separado del siguiente por una coma. 
Un objeto puede tener todos los atributos que sean necesarios.
Escribir el nombre de un objeto separado por un punto del nombre de un atributo, nos permite acceder al valor de 
dicho atributo para ese objeto. Un objeto también se puede pasar como atributo en una función.
Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al 
atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.
*/
var nombre = 'Renato'

function imprimirNombreEnMayuscula (nombre){
    nombre = nombre.toLocaleUpperCase ()
    console.log(nombre)

    imprimirNombreEnMayuscula(nombre)

    // Si quisiera llamar a más de una persona, no puedo poner var nombre = 'María', porque nombre ya se ha declarado

    //Una opción podria ser la siguiente:

    var nombreRenato = 'Renato'
    var nombreMaria = 'María'

    // si quisieramos seguir agregando nombre, tendríamos que seguir con la lista, lo cual no es útil

    // los objetos nos ayudan con esto, acá un ejemplo.

    var renato = {
        nombre: 'Renato',
        apellido: 'Cuellar',
        edad: '31'
    }

    var maria = {
        nombre: 'María',
        apellido: 'Alvarez',
        edad: '28'
    }

    // en la izquierda tenemos clave y en derecha tenemos valor

    // para imprimirlo lo único que debemos hacer es:

    imprimirNombreEnMayuscula(renato.nombre)
    imprimirNombreEnMayuscula(maria.nombre)

    // si queremos hacerlo con la función, podríamos hacerlo de la siguiente manera:

    function imprimirNombreEnMayuscula (persona){ 
        console.log(persona.nombre.toLocaleUpperCase ())
    }
    imprimirNombreEnMayuscula(renato)
    imprimirNombreEnMayuscula(maria)

    // se puede desestructurar los mismos objetos

    function imprimirNombreEnMayuscula (persona){ 
        var nombre = nombre.persona
        console.log(persona.nombre.toLocaleUpperCase ())
    }

    // es exactamente igual que:

    function imprimirNombreEnMayuscula (persona){ 
        var { nombre } = persona
        console.log(persona.nombre.toLocaleUpperCase ())
    }