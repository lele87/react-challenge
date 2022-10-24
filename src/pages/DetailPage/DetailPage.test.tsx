import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import DetailPage from './DetailPage';
import { mockCharacters } from '../../mocks/mockCharacters';
import userEvent from '@testing-library/user-event';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUsedNavigate
}));

describe('Given a DetailsPage', () => {
	describe("When it's invoked", () => {
		test('Then it should render a Header, DetailCharacter, Button and Footer components', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<DetailPage character={mockCharacters[0]} />
					</Provider>
				</BrowserRouter>
			);

			const expectedHeaderImage = screen.getByAltText('Rick and Morty logo');

			const expectedDetailCharacterHeadings = screen.getAllByRole('heading');
			const expectedNumberHeadings = 5;
			const expectedImage = screen.getByAltText('Rick from Rick and Morty Show');

			const expectedButton = screen.getByRole('button', { name: 'Home' });

			const expectedFooterParagraphText = 'Copyright © 2022';
			const expectedFooterParagraph = screen.getByText(expectedFooterParagraphText);

			expect(expectedHeaderImage).toBeInTheDocument();
			expect(expectedImage).toBeInTheDocument();
			expect(expectedDetailCharacterHeadings).toHaveLength(expectedNumberHeadings);
			expect(expectedButton).toBeInTheDocument();
			expect(expectedFooterParagraph).toBeInTheDocument();
		});
	});
	describe('When the user clicks on the Home button', () => {
		test('Then it should navigate to Homepage', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<DetailPage character={mockCharacters[0]} />
					</Provider>
				</BrowserRouter>
			);

			const homeButton = screen.getByRole('button', { name: 'Home' });
			userEvent.click(homeButton);

			expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
		});
	});
});
