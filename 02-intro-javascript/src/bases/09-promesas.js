import { getHeroeById } from "./bases/08-imports-exports";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(1)
//         resolve(heroe);
//         // console.log('2 segundos despues');
//         reject('no se pudo encontrar al heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('grancioso lo resolviste gratificantemente', heroe);
// })
//     .catch(err => console.log(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id)
            if (heroe) {
                resolve(heroe);
            } else {
                reject('no se pudo encontrar al heroe');
            }
            // console.log('2 segundos despues');
        }, 2000);
    });
}
getHeroeByIdAsync(88)
    .then(console.log)
    .catch(console.log);
