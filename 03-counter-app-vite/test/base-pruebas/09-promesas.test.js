import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', ( done ) => {
        const id = 1;
        const heroe = getHeroeByIdAsync( id )
        .then( heroe => {
            expect ( heroe ).toEqual( getHeroeById(id) )
            done();
        })
    });

    test('getHeroeByIdAsync debe retornar un error si heroe no existe', ( done ) => {
        const id = 100;
        const heroe = getHeroeByIdAsync( id )
        .catch( error => {
            expect ( error ).toBe( `No se pudo encontrar el heroe con id ${ id }` );

            done()
        })

    });
});