import heroes, { owners } from "../data/heroes";

// import { heroes } from "../data/heroes"; si escribo heroes js me lo auto completa y me hace la linea de import

// import { heroes } from '../data/heroes' // escribir emp para escribirlo rapido
// console.log(owners);

export const getHeroeById = id => heroes.find(heroe => heroe.id === id) || 'no se encontro';

// console.log(getHeroeById(1));

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));