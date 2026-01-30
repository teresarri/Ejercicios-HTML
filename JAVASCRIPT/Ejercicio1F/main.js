const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let resultadoFor=0;

for(let i=0;i<notas.length;i++){
    resultadoFor+=notas[i];    //resultado=resultado + notas[i]
 
}
console.log ("La suma total con FOR es ", resultadoFor);



let resultadoForOf=0
for(const nota of notas){
    resultadoForOf+=nota;
}
console.log("La suma total con FOR-OF es:", resultadoForOf);
