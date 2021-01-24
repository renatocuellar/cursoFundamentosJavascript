/*En esta clase seguiremos trabajando con condicionales 
para desglosar las funciones en funciones más pequeñas 
que retornen un valor.
Debemos de tener en cuenta que el número 18 esta incluido 
dentro del rango de edad. Para ello utilizamos los símbolos >=.
Return detiene la ejecución de una función y devuelve el valor 
de esa función.
Las variables definidas con const se comportan como las variables, 
excepto que no pueden ser reasignadas. Las constantes pueden ser 
declaradas en mayúsculas o minúsculas. Pero por convención, para 
distinguirlas del resto de variables, se escribe todo en mayusculas.
*/

//Inicia el programa
fnLlenaDatos();

//Llena subobjeto de profesiones
function fnProfesiones(){
    var pregProfesiones = prompt("Introduzca las profesiones separadas por comas. Ej. Ingniero, Músico...");
    //corta los valores de las profesiones y crea un arreglo
    var profesiones = pregProfesiones.split(",");
    //crea el arreglo de las profesiones que queremos, todas en falso
    var objProfesiones = {
        ingeniero: false,
        doctor: false,
        musico: false,
        escritor: false,
        futbolista: false
    }

    //comprueba si las profesiones que introdujo el usuario las tiene el objeto creado anteriormente
    for(var i=0; i < profesiones.length; i++)
        if(objProfesiones.hasOwnProperty(profesiones[i].trim()))
            objProfesiones[profesiones[i]] = true; //si las tiene las pone en true

    return objProfesiones;
}

//llena los datos de objeto
function fnLlenaDatos(){
    //crea objeto a mostrar
    var persona = {
        nombre: prompt("Introduce tu nombre:"),
        edad : prompt("Introduce tu edad:"),
        profesiones: fnProfesiones() //llena con subojeto con base en este método que recibe las profesiones
    }

    fnImprimeDatos(persona);
}

//imprime los datos
function fnImprimeDatos(persona){
    var menorDeEdad = "";
    if(persona.edad > 18)
        menorDeEdad = "y eres mayor de edad";
    else
        menorDeEdad = "y eres menor de edad";

    console.log(`Tu nombre es ${persona.nombre} con ${persona.edad} años ${menorDeEdad}\n`);
    console.log("Tus profesiones son:\n");

    //revisa todas las profesisones que sean true y las imprime
    Object.getOwnPropertyNames(persona.profesiones).forEach(function(val){
        if(persona.profesiones[val])
            console.log(`- ${val.trim()}\n`);
    });
}