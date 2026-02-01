// 1. Número total de enlaces de la página
const enlaces = document.getElementsByTagName("a");
const totalEnlaces = enlaces.length;

// 2. Dirección del penúltimo enlace
const penultimoEnlace = enlaces[enlaces.length - 2].href;

// 3. Número de enlaces del tercer párrafo
const tercerParrafo = document.getElementById("third-paragraph");
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName("a").length;

// 4.1 Mostrar resultados con InnerHTML
const parrafoResultados = document.createElement("p");
parrafoResultados.innerHTML = `
El número total de enlaces es ${totalEnlaces}, 
la dirección del penúltimo enlace es ${penultimoEnlace} 
y el número de enlaces del tercer párrafo son ${enlacesTercerParrafo}.
`;

document.body.appendChild(parrafoResultados);

// 4.2 Mostrar resultados con nodo
const parrafoResultados2= document.createElement('p')
const contenidoParrafoResultados2= document.createTextNode(
  `
El número total de enlaces es ${totalEnlaces}, 
la dirección del penúltimo enlace es ${penultimoEnlace} 
y el número de enlaces del tercer párrafo son ${enlacesTercerParrafo}.
`
)

parrafoResultados2.appendChild(contenidoParrafoResultados2)
document.body.appendChild(parrafoResultados2)