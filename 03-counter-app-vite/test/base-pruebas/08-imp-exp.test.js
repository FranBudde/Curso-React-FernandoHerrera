import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        
        expect ( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe retornar undefined', () => {
        const id = 100;
        const heroe = getHeroeById( id );
        
        expect ( heroe ).toBeFalsy();
    });


    test('getHeroesByOwner retornar un array con los heroes del owner', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        expect ( heroe ).toHaveLength( owner === 'Marvel' ? 2 : 3 );
        
        expect( heroe ).toEqual(
            owner === 'DC' ?
                [
                    { id: 1, name: 'Batman', owner: 'DC' },
                    { id: 3, name: 'Superman', owner: 'DC' },
                    { id: 4, name: 'Flash', owner: 'DC' }
                ] :
                [
                    { id: 2, name: 'Spiderman', owner: 'Marvel' },
                    { id: 5, name: 'Wolverine', owner: 'Marvel' }
                ]
        );

        heroe.forEach(heroe => {
            expect ([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]).toContainEqual( heroe )
        });
    })
})