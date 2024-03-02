import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('06-deses-obj', () => {
    test('Debe retornar un objeto', () => {
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const resultado = usContext( persona )

        expect ( resultado ).toEqual( {
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        } )
    })
})