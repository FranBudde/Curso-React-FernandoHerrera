const persona = {
    name: 'Fernando',
    apellido: 'Herrera',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1312312,
        lat: 14.32323,
        lng: 34.133,
    },
};

// console.table(persona);
console.log(persona);

const persona2 = { ...persona }; //operador spread clonar el objeto

console.log(persona2);