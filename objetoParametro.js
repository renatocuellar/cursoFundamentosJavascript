print(holaMundO)

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

function cumpleaños (persona){
    return {
        ...persona,
        edad: persona.edad += 1
    }
}

/* JavaScript se comporta diferente con los objetos.
 * Cuando una función recibe un objeto como parámetro, 
 * se pasan por referencia, esto quiere decir que 
 * si los modificamos dentro del cuerpo de una función
 * su valor se va a ver modificado fuera de la misma.
 */

var carola = {
    nombre:   'Carola',
    apellido: 'Garcia',
    edad:     30
}

function cumpleanos(persona){
    persona.edad += 1
}