/* 
    Operadores con numeros:
    para sumar se usa +
    para restar se usa -
    para multiplicar se usa *
    para dividir se usa /
*/

edad += 1 //lo que ya tenia edad mas 1 (edad vale 28)
edad ++ //lo que vale edad mas 1 (edad vale 29)
edad -= 1 //lo que ya tenia edad menos 1 (edad vale 26)
edad -- //lo que ya tenia edad menos 1 (edad vale 25)

var edad = 27

edad += 1 // será para aumentar el valor + 1 => edad = edad + 1

var peso = 75

peso = peso - 2 // esta sería la manera clasica de expresarlo

pesa -= 2 // Esta sería la mejor manera de expresarlo

var sandwich = 1

peso = peso + sandwich

var jugaFootball = 3

peso -= jugaFootball

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100 //redondear una cantidad con Math.round()
var totalStr = total.toFixed(2) //toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var total2 = parseFloat(totalStr) //parsear de un string a un float (convertir de texto a numero decimal)

var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / personas