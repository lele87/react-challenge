import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PageNotFound from './PageNotFound';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUsedNavigate
}));

describe('Given a Page not found', () => {
	describe("When it's invoked", () => {
		test('Then it should render a Header, Footer components and Button components', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<PageNotFound />
					</Provider>
				</BrowserRouter>
			);

			const expectedHeaderImage = screen.getByAltText('Rick and Morty logo');

			const expectedButton = screen.getByRole('button', { name: 'Home' });

			const expectedFooterParagraphText = 'Copyright © 2022';
			const expectedFooterParagraph = screen.getByText(expectedFooterParagraphText);

			expect(expectedHeaderImage).toBeInTheDocument();
			expect(expectedButton).toBeInTheDocument();
			expect(expectedFooterParagraph).toBeInTheDocument();
		});
	});

	describe('When the user clicks on the Home button', () => {
		test('Then it should navigate to Homepage', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<PageNotFound />
					</Provider>
				</BrowserRouter>
			);

			const homeButton = screen.getByRole('button', { name: 'Home' });
			userEvent.click(homeButton);

			expect(mockedUsedNavigate).toHaveBeenCalledWith('/home');
		});
	});
});
