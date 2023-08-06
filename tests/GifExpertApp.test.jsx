import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas sobre <GifExpertApp />', () => {

    test('Debe hacer match con el snapshot', () => {

        const {container} = render( <GifExpertApp />);
        expect(container).toMatchSnapshot();

    });

    test('No debe ingresar búsquedas repetidas', () => {

        render( <GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Dragon Ball' } } );
        fireEvent.submit( form );

        //screen.debug();
    });

    test('Debe ingresar búsquedas no repetidas', () => {

        render( <GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'One Punch' } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole( 'heading', {level:3} ).length ).toBe(2);
    });

});