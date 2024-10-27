//1

// let weekDays = new Array(7);

// let d = 1;

// while (weekDays.length <= 7){
//     let day = prompt(`Escribe el dia ${d}`);
//     weekDays.push(day)
//     d++
// };

// conosole.table(weekDays);


//  2

// Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y 
// utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas. 
// utiliza console.table para ver el resultado.


const laborables = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
// console.log(laborables);

laborables.forEach(element => {
    element.toUpperCase
});

// console.table(laborables);

let laborablesMayus = laborables.map(x => (x.toUpperCase()))
// console.table(laborablesMayus);

let prueba2 = laborables.map((x) => {
    return x.toUpperCase();
})
// console.table(prueba2);


//  3

// Crea un array para albergar al menos 10 números enteros cualesquiera, 
// luego rellena el array (o créalo ya con los valores). 
// El ejercicio trata de crear a partir de este array otros dos uno con 
// los números pares y otro con los impares. 
// No debes usar bucles, usa el método del array qe creas más apropiado.

let array1 = [1,2,3,4,5,6,7,8,9,0];
let pares = [];

let impares = [];

array1.map((element) => {
    element % 2 == 0 ? pares.push(element) : impares.push(element);
})

// console.table(impares);


//  4

// Crea un array de al menos 10 elementos para guardar números enteros. 
// Usa un método para obtener la suma de los números pares y la de los números impares.

let paresSumados = pares.reduce((acomulador, valorActual) => {
    return acomulador + valorActual;
});
// console.table(paresSumados);

let imparesSumados = impares.reduce((acomulador, valorActual) => {
    return acomulador + valorActual;
});

// console.table(imparesSumados);



//  5

// Crea un array bidimensional para almacenar nombre y calificación 
// de un grupo de asistentes a un curso. Una vez creado rellénalo con al menos 4 elementos y 
// luego ordénalos por orden crecientes de las calificaciones. 

let arrayBidimensional = [
    ['laura', 5],
    ['roberto', 7],
    ['leonidas', 9],
    ['tamalia', 2],
    ['rumpencio', 8],
    ['ana', 1]
];

let orderedArray = arrayBidimensional.sort((a, b) => b[1] - a[1]);
// console.table(orderedArray);


//  6

// En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. 
// Al primer array le llamaremos ocupados y al segundo libres. Ambos están llenos con 5 nombres.
// Debes crear una función rotar(lst1, lst2) que pase el primer nombre 
// de la lista lst1 a l final de lst2, y luego el primero de la lst2 a l final de lst1.
// Para ver que funciona escribe los arrays antes y después de usar esta función.



let ocupados = ['carlos', 'carla','carmen','carolina','karen'];
let libres = ['ana','anuel','armero','arancel','array'];


const rotar = (lst1, lst2) => {
    let temporal = lst1[0];
    lst2.unshift(temporal);
    temporal = lst2[1]
    lst2.slice(temporal);
    lst1.unshift(temporal);
    console.table(lst1);
    console.table(lst2);
};

// rotar(ocupados,libres);


//  7

// Tenemos dos listas de asistentes a dos cursos: html y css. 
// Queremos obtener una lsita de los asistentes a ambos cursos. 
// La lista estará ordenada.



const html = ['Pedro','Juan','Ana'];
const css=['Luis','Juan', 'Ana','María'];

const buscadorEstudioso = (lista1, lista2) => {
    let estudiosos = []
    let firstIterator
    let secondIterator

    if (lista1.length >= lista2.length) {
        firstIterator = lista1;
        secondIterator = lista2;
    } else {
        firstIterator = lista2;
        secondIterator = lista1;
    }
    firstIterator.forEach(x1 => {
        secondIterator.forEach(x2 => {
            x1 == x2 ? estudiosos.push(x1) : null;
        });
    });
    console.log(estudiosos);
};

// buscadorEstudioso(html,css);



//  8

// Tienes que crear un script que gestione una lista de la compra. 
// Para ello tienes dos listas de artículos: compra, pendiente. 
// Cada elemento de la lista compra es un objeto con dos propiedades: 
// nombre del artículo y estado. Estado es un booleano true si el artículo se compró, 
// false en caso contrario. Pendiente es una lista con los nombres de los artículos que 
// faltan por comprar. La función que debes crear recibe como argumento la lista de compra 
// y devuelve la lista de pendientes.


let compra = [
   {articulo:'Naranjas',estado: false}, 
   {articulo:'Manzanas', estado: true}, 
   {articulo:'Peras', estado: false}, 
   {articulo:'Plátanos', estado: true}
];

const productosPendientes = (lista) => {
    let pendiente = [];
    lista.forEach(element => {
        element.estado == false ? pendiente.push(element) : null ;
    });
    console.table(pendiente);
}
// productosPendientes(compra);




//  9

// En este ejercicio partimos de dos arrays: artículos que contiene nombres de artículos y 
// precios que contiene lo precios correspondientes de cada artículo. 
// Trata de crear una función precio(art) que lleva como argumento el nombre 
// de un artículo y devuelve el precio correspondiente. si el artículo no existe devolverá -1.



        
let frutas = ['Naranjas','Peras','Bananas','Duraznos'];
let precios = [2000, 5000, 3500, 4000];

const generadorListas = (articulo, valor) => {
    let listaDeMercado = [];
    
    articulo.forEach((element, i) => {
        listaDeMercado.push({fruta: element, precio: valor[i]})
    });
    console.log(listaDeMercado);
}

// generadorListas(frutas, precios);


//  10

// Tienes una lista de objetos con los nombres de los miembros de una familia. 
// Este script debe devolver dos objetos con los datos (nombre y edad) del miembro
// de mayor edad y del de menor edad.

let familia = [
    {nombre:'Juan', edad: 34}, 
    {nombre:'Pepa', edad: 40}, 
    {nombre:'Ana', edad: 12} ,
    {nombre:'Luis', edad: 14} 
];

const buscadorEdades = (unaFamilia) => {
    let elMayor =  0;
    let familiarMayor
    let familiarMenor
    unaFamilia.map((familiar) => {
        if (familiar.edad > elMayor) {
            elMayor = familiar.edad;
            familiarMayor = familiar
        }
    });
    
    console.log(familiarMayor)
}

// buscadorEdades(familia);

let max = familia.reduce(function(max, val){
    return val.edad > max.edad ? val : max}, familia[0]);
let min = familia.reduce(function(max, val){ 
    return val.edad < max.edad ? val : max}, familia[0]);

// console.log("Miembro mayor: " + max.nombre + " de " + max.edad + " años");
// console.log("Miembro más joven: " + min.nombre + " de " + min.edad + " años");

//  11

// Realizar un programa que detecte si una palabra es un palindromo o no 
// SIN USAR METODOS DE ARRAY´S (Prueba trainee???)

const detectorDePalindromos = ( word ) => {
    let invertedWord = "";
    for(let i = word.length - 1;  i >= 0; i--){
        invertedWord += word[i];
    }
    let checkedWord = invertedWord == word ? true : false
    console.log(invertedWord);
    console.log(`${word} es un palindromo? ${checkedWord}`)
}

// detectorDePalindromos("otto");
// detectorDePalindromos("Marvel");

let word ='I am learning Web Dev'
  .split(' ')
  .map(s=>
    s[0].toUpperCase() 
    + s.slice(1).toLowerCase())
  .join(' ')
// console.log(word);

console.log(null || 'string');
