import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    const nombre = 'Goku';
    const mensaje = 'puto';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp name={ nombre } message={ mensaje }/>);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje Goku puto', () => {
        render( <FirstApp name={ nombre } message={ mensaje }/>);
        expect( screen.getByText( nombre, mensaje )).toBeTruthy();
    });

    test('debe de mostrar el nombre en un h1', () => {
        render( <FirstApp name={ nombre }/>);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain( nombre )

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render( <FirstApp name={ nombre } message={ mensaje }/>);
        expect( screen.getAllByText(mensaje).length).toBe(1)
    })
});