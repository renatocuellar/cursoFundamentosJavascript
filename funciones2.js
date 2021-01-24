var nombre = 'Renato'

// Al usar el nombre fuera d euna función lo estamos volviendo una función global

function imprimirNombreEnMayuscula (n){
    n = n.toLocaleUpperCase ()
    console.log(n)

    imprimirNombreEnMayuscula()

    nombre // RENATO

    n // No existe en el global, teng que imprimir la función para que realmente se imprima

    // Incluso si no se reemplaza por n, nombre se imprime inmeditamente en mayuscula (upper case) pero no en local, sigue la variable global
}