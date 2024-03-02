const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


// export const owners = ['DC', 'MARVEL']; Exportar algo en especifico
const owners = ['DC', 'MARVEL'];

// export default heroes; Exportar por default heroes

export {
    heroes as default,
    owners,
} // exportar por lo que queremos y tambien podemos asignar cual es nuestro defaul


const names = ['jose','fran','josefina']

if(req.query.user.include(names)){
    return 
}