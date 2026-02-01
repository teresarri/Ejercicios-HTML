//7.1: Suma de números pares
let numeros=[1,2,3,4,5];
function sumarPares(numeros){
    let suma=0;
    for(let i=0;i<numeros.length; i++) {
        if(numeros[i] % 2===0){
            suma+=numeros[i];
        }
    }
    return suma
};

console.log('El resultado del ejercicio 7.1 es ', sumarPares(numeros));
console.log('El resultado del ejercicio 7.1 cambiando el arrary ', sumarPares([9,25,32,45,70]));

//7.2: Elimina las consonantes

let frase="Hola mundo";

function soloVocales(fraseNueva) {

    let vocales=""

    const nuevoArray=fraseNueva.toLowerCase().split('')

        for(const letra of nuevoArray){

         if(letra=='a'|| letra=='e'||letra=='i'|| letra=='o'||letra=='u') {
            vocales+=letra
        }
    }
return vocales
}

console.log(soloVocales(frase));
console.log(soloVocales("Hasta luego"));

// 7.3 Temperatura en grados Fahrenheit

function gradosFahrenheit (celsius){
    return celsius * (9/5) + 32

}

console.log('El resultado del ejercicio 7.3: ',gradosFahrenheit(20));

// 7.4 Pares o impares

function checkNumber(numero){
    if(numero % 2===0){
        return "El número es par";
    } else{
       return "El número es impar";
    }
}

// 7.5: Mayúsculas o minúsculas
let fraseUsuario= prompt("Escribe una frase:");

function tipoLetras(cadenaTexto){
        if(fraseUsuario===fraseUsuario.toUpperCase()){
        return alert ("La frase está escrita en MAYÚSCULAS");
    } else if (fraseUsuario===fraseUsuario.toLowerCase()){
        return alert("La frase está escrita en minúsculas");
    }else{
        return alert("La frase está escrita en mayúscula y minúsculas");
    }
}

tipoLetras(fraseUsuario);

//7.6 Arrays

const topics=["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

function invertirArray(array) {
    const arrayMayus=array.map((topic)=> {
        return topic.toUpperCase()
    })
    arrayMayus.reverse()

    return arrayMayus;
}

console.log('Ejercicio 7.6 = ' , invertirArray(topics));

//7.7 Separa los pares

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683]
function paresNumber(arrayNumeros){
    return arrayNumeros.filter(numero => numero % 2===0)
}
console.log('Ejercicio 7.7 = ', paresNumber(number))

//7.8 Concatenación de métodos

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
]

function mesesLargosMay(arrayMeses){
    return arrayMeses
        .filter((mes) => mes.length > 7)
        .map((mes) => {
            return mes.toUpperCase()
        })
}

 console.log(mesesLargosMay(meses))
