const activo = true;

let message = '';

//forma tradicional
if (activo) {
    message = 'Activo'
} else {
    message = 'Inactivo'
}

console.log(message);

// if ternario

const mensaje = activo ? 'Activo' : 'Inactivo';
console.log(mensaje);

const mensaje2 = activo && 'Activo' || 'Inactivo';
console.log(mensaje2);

