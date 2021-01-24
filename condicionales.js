/*En esta clase empezaremos a trabajar con estructuras de control, 
éstas nos permiten decidir el flujo de nuestro código.
Empezaremos con los condicionales. Los condicionales nos permiten decidir si un código se ejecuta o no. 
También introducimos un nuevo tipo de datos primitivos: el booleano, que determina si un valor es falso o verdadero. 
Mediante un condicional (if) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.
*/

var clebert = {
    nombre: 'Clebert',
    apellido: 'Alix',
    edad: 28,
    ingeniero: false,
    cosinero: false,
    canante: true,
    dj: true,
    guitarista: true,
    drone: false,
  }
  var tessa = {
    nombre: 'Tessa',
    apellido: 'Luna',
    edad: 18,
    ingeniero: true,
    cosinero: true,
    canante: false,
    dj: false,
    guitarista: false,
    drone: false,
  }
  var johnny = {
    nombre: 'Johnny',
    apellido: 'Ber',
    edad: 16,
    ingeniero: true,
    cosinero: false,
    canante: false,
    dj: false,
    guitarista: true,
    drone: false,
  }
  
  function imprimirProfesiones(persona){
    console.log(`${persona.nombre} por tan tonto como lo ves,`)
  
    if (persona.ingeniero) {
      console.log('es: Ingeniero')
    } else {
      console.log('No es Ingeniero')
    }
  
    if (persona.cosinero) {
      console.log('es: Cosinero')
    } else {
      console.log('No es Cosinero')
    }
  
    if (persona.cantante) {
      console.log('es: Cantante')
    } else {
      console.log('No es Cantante')
    }
  
    if (persona.dj) {
      console.log('es: Dj')
    } else {
      console.log('No es Dj')
    }
  
    if (persona.guitarista) {
      console.log('es: Guitarista')
    } else {
      console.log('No es Guitarista')
    }
  
    if (persona.drone) {
      console.log('es: Piloto de Drone')
    } else {
      console.log('No pilotea drones')
    }
  }
  
  imprimirProfesiones(clebert)
  imprimirProfesiones(tessa)
  imprimirProfesiones(johnny)
  
  function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad},`)
  
    if (persona.edad >= 18) {
      console.log('es mayor de edad')
    }
    if (persona.edad < 18) {
      console.log('es menor de edad')
    }
  }
  
  imprimirSiEsMayorDeEdad(clebert)
  imprimirSiEsMayorDeEdad(tessa)
  imprimirSiEsMayorDeEdad(johnny)