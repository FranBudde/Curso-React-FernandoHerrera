const personajes = ['goku', 'vegeta', 'trunks'];

const [, p2] = personajes;
console.log(p2);


const retornaArreglo = () => ['ABC', 123];
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


const usaEstado = valor => [valor, () => console.log(`hola mundo`)];

const [nombre, setNombre] = usaEstado('goku');
console.log(nombre);
setNombre();


