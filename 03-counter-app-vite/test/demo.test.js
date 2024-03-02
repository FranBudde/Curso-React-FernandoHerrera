describe('Pruebas en <DemoCompontent />', () => {
    test('Esta prueba no debe fallar', () => {
        // 1. Inicializador (arrage/arreglar) ==> se definen las variables con los valores y 
        //la configuracion inicial del entorno de prueba
        const message1 = 'Hola Mundo';

        // 2. estimulo (act/actuar) ==> los estimulos al sujeto de prueba
        const message2 = message1.trim();

        // 3. Observarel comportamiento... esperado
        expect( message1 ).toBe( message2 );
    })
})