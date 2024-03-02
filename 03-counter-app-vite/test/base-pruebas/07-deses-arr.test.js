import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('07-deses-arr', () => {
    test('Debe retornar un string y un number', () => {
        const [ letters, numbers ] = retornaArreglo();
        
        //Forma de teasterlo opcion 1
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        //Forma de teasterlo opcion 2
        expect(typeof letters).toBe( 'string' );
        expect(typeof numbers).toBe( 'number' );

        //Forma de teasterlo opcion 3
        expect(  letters ).toEqual( expect.any( String ));
        expect(  numbers ).toEqual( expect.any( Number ));
    })
})