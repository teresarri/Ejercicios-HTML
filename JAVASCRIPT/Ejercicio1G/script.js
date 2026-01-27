
// Suma de números pares
let numeros=[1,2,3,4,5];
function sumarPares(numeros){
    let suma=0;
    for(let i=0;i<numeros.length; i++) {
        if(numeros[i] % 2===0){
            suma=suma+numeros[i];
        }
    }
    return suma
};

console.log(sumarPares(numeros));
console.log(sumarPares([9,25,32,45,70]));

// Elimina las consonantes

let frase="Hola mundo";
function soloVocales(frase){
    let resultado=""
    frase=frase.toLowerCase();
    for(let i=0;i<frase.length;i++){
        letra=frase.charAt(i);
        if(letra=='a'|| letra=='e'||letra=='i'|| letra=='o'||letra=='u') {
            resultado+=letra
        }
    }
return resultado
}

console.log(soloVocales(frase));
console.log(soloVocales("Hasta luego"));

// Temperatura en grados Fahrenheit

let celsius=0;

function gradosFahrenheit (celsius){
    let conversion=(celsius*9/5)+32
    return conversion
}

console.log(gradosFahrenheit(celsius));
console.log(gradosFahrenheit(20));

// Pares o impares

let numero;
function checkNumber(numero){
    if(numero % 2===0){
        return "El número es par";
    } else{
       return "El número es impar"; 
    }
}

// Mayúsculas o minúsculas

function tipoLetras(){
    let frase= prompt("Escribe una frase:");

    if(frase===frase.toUpperCase()){
        alert ("La frase está escrita en MAYÚSCULAS");
    } else if (frase===frase.toLowerCase()){
        alert("La frase está escrita en minúsculas");
    }else{
        alert("La frase está escrita en mayúscula y minúsculas");
    }
}

tipoLetras();

//Todo en mayúsculas

const topics=["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

function newTopics() {
    const mayusculas=topics.map(topico=>topico.toUpperCase());
    const invertido=mayusculas.reverse();

    return invertido;
}

const resultado= newTopics(topics);
console.log(resultado);
    
//Separa los pares

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
let paresNumber= number.filter(function(par){
    return par % 2===0
});
console.log(paresNumber);
