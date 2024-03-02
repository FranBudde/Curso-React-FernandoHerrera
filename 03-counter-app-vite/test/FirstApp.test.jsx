import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        
        const name = 'Goku';
        const message = `Hola ${ name }`
        const { container } = render( <FirstApp />);

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el nombre en un h1 y un mensaje en un P ', () => {
        const nombre = 'guille';
        const mensaje = 'puto';
        const { container, getByText } = render( <FirstApp name={ nombre } message={ mensaje }/>);

        expect( getByText( nombre, mensaje )).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( nombre )
    })
})