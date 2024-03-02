// Desestructuracion 
// Asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man',
};

// const { nombre, edad, clave } = persona

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retortaPersona = ({ nombre, edad, rango = 'Capitan' }) => console.log(nombre, edad, rango);

// retortaPersona(persona);

const uSEcontext = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    return {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.22331,
            lng: -12.1422,
        },
    };

};

const avenger = uSEcontext(persona);
const { nombreClave, anios, latLng: { lat, lng } } = avenger;

console.log(avenger);
console.log(nombreClave, anios);
console.log(lat, lng);






