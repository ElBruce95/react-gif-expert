import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const image = {
        title: 'Google',
        url: 'https://www.google.com/',
    };

    test('Debe hacer match con el snapshot', () => {

        const {container} = render( <GifItem { ...image } />);
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render( <GifItem { ...image } />);
        //screen.debug();

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( image.url );
        expect( alt ).toBe( image.title );

    });

    test('Debe de mostrar el titulo en el componente', () => {

        render( <GifItem { ...image } />);
        expect( screen.getByText( image.title ) ).toBeTruthy();
    });

})