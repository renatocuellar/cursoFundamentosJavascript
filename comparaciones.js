Boolean:  // false/true
Null:  // nulo o "vacío"
Undefined: // Cuando una variable es declarada pero aún no tiene un valor asignado 
Number: // 383839
String:  // "esto es una string"

// Siempre que podamos es mejor cusar el triple = "==="

var sacha = {
    nombre: 'Sacha'
}
var otro = {
    nombre: 'Sacha'
}
var otroMas = {
    ...sacha
}

sacha == otro		
// false

sacha === otro 	
// false

sacha == otroMas	
// false

sacha === otroMas	
// false
