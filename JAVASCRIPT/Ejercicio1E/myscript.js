
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni=prompt("Introduce tu numero de DNI sin letra", "DNI");
    if(dni<0 || dni>99999999){
        alert("El número proporcionado no es válido");
    }
        else{
        let letra=letras[dni%23];
        alert("La letra del DNI es " + letra);
    };
        