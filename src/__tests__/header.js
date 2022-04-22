import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/header';

describe('Given I am a visitor', () => {
	describe('when I am on a Home page', () => {
		test('Then,there should be on the page', () => {
			render(
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			);
			const logo = screen.getByTestId('logo');
			expect(logo.className).toBe('header__logo');
		});
	});
});
