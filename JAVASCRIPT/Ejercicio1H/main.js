class cuadrado{ 
    constructor(lado){
        this.lado=lado
    }

calculoPerimetro (){
    let perimetro = this.lado*4
    console.log(`Perímetro: ${perimetro} cm`)
    }
 
calculoArea (){
    let area = this.lado**2    
    console.log(`Área: ${area} cm2`)
    }
}

let cuadradoPequeño= new cuadrado (2)
cuadradoPequeño.calculoPerimetro()
cuadradoPequeño.calculoArea()

let cuadradoMediano= new cuadrado (5);
cuadradoMediano.calculoPerimetro()
cuadradoMediano.calculoArea()

let cuadradoGrande= new cuadrado (10);
cuadradoGrande.calculoPerimetro()
cuadradoGrande.calculoArea()


