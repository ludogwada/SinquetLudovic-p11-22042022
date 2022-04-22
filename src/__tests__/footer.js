import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer/footer';

describe('Given I am a visitor', () => {
    describe('When I am on a Home page', () => {
        test('Then, there shoulde be on a page', () => {
            render(
                <MemoryRouter>
                    <Footer />
                </MemoryRouter>
            );
            const logo = screen.getByTestId('logoFooter');
            expect(logo.className).toBe('footer__logo');
        });
    });
});
