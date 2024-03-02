// Arreglos JS

// const arreglo = new Array();
const arreglo = [1, 2, 3, 4];
// arreglo.push(1, 2, 3, 4); NO USAR EL METODO PUSH PORQUE MODIFICAMOS EL ARRAY ORIGINAL

// let arreglo2 = arreglo;
// arreglo2.push(5) ESTO ES MAL

let arreglo2 = [...arreglo, 5]; //ESTO ES BIEN

const arreglo3 = arreglo2.map((n) => (n * 2));


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);