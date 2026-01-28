class cuadrado{ 
    constructor(lado){
        this.lado=lado;
    }

calculos (){
    let perimetro = this.lado*4;
    let area = this.lado**2;

    console.log(`Lado: ${this.lado} cm`);
    console.log(`Perímetro: ${perimetro} cm`);
    console.log(`Área: ${area} cm2`);
}

}

let cuadradoPequeño= new cuadrado (2);
let cuadradoMediano= new cuadrado (5);
let cuadradoGrande= new cuadrado (10);

cuadradoPequeño.calculos();
cuadradoMediano.calculos();
cuadradoGrande.calculos();

