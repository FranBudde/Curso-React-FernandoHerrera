//Funciones 

const saludar = function (nombre) {
    return `HOLA, ${nombre}`
}

const saludar2 = (nombre) => { return `HOLA, ${nombre}` }

const saludar3 = nombre => `HOLA, ${nombre}`


console.log(saludar('GOKUUU'));
console.log(saludar2('FREZEEER'));
console.log(saludar3('VEGETAAAAAA'));

const getUser = () => ({
    uid: 'ABC1234',
    username: 'pepito_123',
})

console.log(getUser());

const getUsuarioActivo = nombre => ({
    uid: 'ABC567',
    userName: nombre,
});
const usuarioActivo = getUsuarioActivo('Fernando');

console.log(usuarioActivo);