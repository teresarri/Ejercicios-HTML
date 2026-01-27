const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let resultado=0;

for(let i=0;i<9;i++){
    resultado+=notas[i];    //resultado=resultado + notas[i]
 
}
console.log ("La suma total con FOR es ", resultado);



let resultado2=0
for(const nota of notas){
    resultado2+=nota;
}
console.log("La suma total con FOR...OF es:", resultado2);
