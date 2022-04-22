import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Error from '../pages/error';

describe('Given I am a visitor', () => {
    describe('When I am on a Error page', () => {
        test('Then, there should be on the page', () => {
            render(
                <MemoryRouter>
                    <Error />
                </MemoryRouter>
            );
            const errorText = screen.getByText('404');
            expect(errorText.className).toBe('error__text');
        });
    });
});
