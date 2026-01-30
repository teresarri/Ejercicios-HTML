// Resolución según el video

const datas= ["hola",2,5,"adios"];

const n1=datas[1];
const n2=datas[2];

console.log("¿Es el primer número mayor que el segundo?", (n1>n2))

console.log('Suma: ', (n1+n2))
console.log('Resta: ', (n1-n2))
console.log('Multiplicación: ', (n1*n2))
console.log('División: ', (n1/n2))
console.log('Cociente: ', (n1%n2))

// Resolución alternativa
const data= ["hola",2,5,"adios"];

const dato1=data[1];
const dato2=data[2];

if(dato1>dato2) {
    console.log("El número mayor es "+ dato1)
}
else{
    console.log("El número mayor es " + dato2)
};

const suma=dato1+dato2;
console.log("La suma es ", suma);

const resta=dato1-dato2;
console.log("La resta es ", resta);

const multiplicar=dato1*dato2;
console.log("La multiplicación es ", multiplicar);

const dividir=dato1/dato2;
console.log("La división es ", dividir);

const cociente=dato1%dato2;
console.log("El resto es ", cociente);

