import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

const name1 = 'El_Papi1502'

describe('05-Funciones', () => {
    test('Debe retornar un objeto', () => {
        const name = {
            uid: 'ABC123',
            username: name1
        }

        const resultado = getUser()

        expect ( resultado ).toEqual( name )
    })


    test('getUsuarioActivo debe retornar un objeto', () => {
        const objeto1 = {
            uid: 'ABC567',
            username: name1
        };

        const resultado = getUsuarioActivo( name1 );

        expect ( resultado ).toEqual( objeto1 );
    })
})