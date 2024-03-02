import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-string', () => {
    test('Tiene que retornar "Hola Guille"', () => {
        const name = 'Guille';
        const resultado = getSaludo( name );

        expect (resultado).toBe(`Hola ${ name }`);
    });
});