// areglos(Arrays)

let varios = [1,"juan", "bogota",20.45, true];
// en cosola el tamaño del arreglo
console.log(varios.length);
console.log(varios[0]);
// agregar un solo valor

varios.push(30);
console.log(varios);
// sacar un elemento (el ultimo)
varios.pop();

let enteros = [1,2,3,4,5,7,9];
//concatenar
 let concat = varios.concat(enteros);
console.log(concat);
//agregar al inicio 

let inicio = concat.unshift("inicio");
console.log(inicio);
//quitar el primer elemento 
inicio = concat.shift();

for(i = 0;i<varios.length;i++){
    console.log(varios[i]);
}

varios.forEach(elementos => {
    console.log(elementos);
})

//.reduce()

let numeros = [100,300,2,5,10]
let resultado = numeros.reduce((accumulador,valorActual)=>{
    return accumulador+valorActual;
})

console.log(resultado);

//filter()
//let filtrad = numeros.filter(numero =>{return numero > 10;
//});
//console.log(filtrado);

let paises = ["colombia","USA","Brasil","Mexico"];

let filtered = paises.filter(pais => {
    return pais.startsWith("C");
});

console.log(filtered);

//.map()

const saludarPais = paises.map(country =>{
    return "Bienvenidos Pasajeros de" + country;
});

// Tarea Martes clase 4  Tipo flecha

for (let i = 0; i < varios.length; i++) {
    console.log(varios[i]);
  }

  varios.forEach(elemento => {
    console.log(elemento);
    });

const numero = [100, 300, 2, 5, 10];
const result = numero.reduce((acumulador, valorActual) => acumulador + valorActual);
console.log('Resultado de la suma:', resultado);

const saludarpais = paises.map(pais => `Bienvenidos Pasajeros de ${pais}`);
console.log(saludarPais);

const filtrado = numeros.filter(numero => numero > 10);
console.log('Números mayores a 10:', filtrado);


// Tarea Martes clase 4  metodos de arreglos visto y mostrar resultados

// Arreglo 'varios'
let vario = [1, "juan", "bogota", 20.45, true];

// Tamaño del arreglo
function obtenerTamano(arreglo, callback) {
  callback(arreglo.length);
}

obtenerTamano(varios, (tamano) => {
  console.log(`Tamaño del arreglo 'varios': ${tamano}`);
});

// Agregar un valor al final
function agregarValor(arreglo, valor, callback) {
  arreglo.push(valor);
  callback(arreglo);
}

agregarValor(varios, 30, (resultado) => {
  console.log("Arreglo 'varios' después de agregar 30:", resultado);
});

// Eliminar el último elemento
function eliminarUltimo(arreglo, callback) {
  arreglo.pop();
  callback(arreglo);
}

eliminarUltimo(varios, (resultado) => {
  console.log("Arreglo 'varios' después de eliminar el último elemento:", resultado);
});

// Arreglo 'enteros'
let entero = [1, 2, 3, 4, 5, 7, 9];

// Concatenar arreglos
function concatenarArreglos(arreglo1, arreglo2, callback) {
  let resultado = arreglo1.concat(arreglo2);
  callback(resultado);
}

concatenarArreglos(varios, enteros, (concat) => {
  console.log("Arreglo resultante de la concatenación:", concat);
});

// Agregar al inicio
function agregarAlInicio(arreglo, valor, callback) {
  arreglo.unshift(valor);
  callback(arreglo);
}

agregarAlInicio(concat, "inicio", (resultado) => {
  console.log("Arreglo después de agregar 'inicio' al inicio:", resultado);
});

// Eliminar el primer elemento
function eliminarPrimerElemento(arreglo, callback) {
  arreglo.shift();
  callback(arreglo);
}

eliminarPrimerElemento(concat, (resultado) => {
  console.log("Arreglo después de eliminar el primer elemento:", resultado);
});

// Recorrer con forEach
function recorrerArreglo(arreglo) {
  arreglo.forEach((elemento) => {
    console.log(elemento);
  });
}

console.log("Recorriendo 'varios' con forEach:");
recorrerArreglo(varios);

// Suma de números con reduce
function sumarNumeros(arreglo, callback) {
  const resultado = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual);
  callback(resultado);
}

sumarNumeros(numeros, (resultado) => {
  console.log("Resultado de la suma:", resultado);
});

// Filtrar países que comienzan con 'C'
function filtrarPaises(arreglo, letra, callback) {
  const filtrado = arreglo.filter((pais) => pais.startsWith(letra));
  callback(filtrado);
}

filtrarPaises(paises, "C", (filtered) => {
  console.log("Países que comienzan con 'C':", filtered);
});

// Saludar a los pasajeros de cada país
const saludaPais = paises.map((pais) => `Bienvenidos Pasajeros de ${pais}`);
console.log(saludaPais);
