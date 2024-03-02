import { fireEvent, render, screen } from "@testing-library/react";
import { CounterAPP } from "../src/CountertApp"

describe('Pruebas en <CounterApp />', () => {
    const inicialValue = 10
    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <CounterAPP value={inicialValue}/>)
        expect( container ).toMatchSnapshot();
    });

    test('Debe de coincidir con el valor inicial de 100', () => {
        render( <CounterAPP value={100}/>)
        expect( screen.getByRole('heading', { level: 2 }).innerHTML).toBe(' 100 ')
    });
    
    test('Debe de inclementar con el boton +1', () => {
        render( <CounterAPP value={inicialValue}/>)
        fireEvent.click( screen.getByText('+1'));
        expect( screen.getByText('11')).toBeTruthy();
    });
    
    test('Debe de declementar con el boton -1', () => {
        render( <CounterAPP value={inicialValue}/>)
        fireEvent.click( screen.getByText('-1'));
        expect( screen.getByText('9')).toBeTruthy();
    });
    
    test('Debe de funcionar con el boton Reset', () => {
        render( <CounterAPP value={ 356 }/>)
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        // fireEvent.click( screen.getByText('Reset')); opcion 11
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'})); //opcion 2

        expect( screen.getByText( 356 )).toBeTruthy();
    });
})

