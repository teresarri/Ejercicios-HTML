// 1. Número total de enlaces de la página
const enlaces = document.getElementsByTagName('a');
const totalEnlaces = enlaces.length;

// 2. Dirección del penúltimo enlace
const penultimoEnlace = enlaces[enlaces.length - 2].href;

// 3. Número de enlaces del tercer párrafo
const tercerParrafo = document.getElementById('third-paragraph');
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a').length;

// 4. Crear un nodo h1
const titulo = document.createElement('h1');
titulo.textContent = 'Resultados DOM';

// 5. Crear un contenedor para los resultados
const resultados = document.createElement('div');
resultados.innerHTML = `
  <p>Número total de enlaces: ${totalEnlaces}</p>
  <p>Dirección del penúltimo enlace: ${penultimoEnlace}</p>
  <p>Número de enlaces del tercer párrafo: ${enlacesTercerParrafo}</p>
`;

// 6. Añadir todo al final del body
document.body.appendChild(titulo);
document.body.appendChild(resultados);
