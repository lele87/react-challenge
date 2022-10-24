import store from '../../redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import HomePage from './Homepage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUsedNavigate
}));

describe('Given a DetailsPage', () => {
	describe("When it's invoked", () => {
		test('Then it should render a Header, Sort Characters, Filter, Search Bar, Characters List, Pagination and Footer components', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<HomePage />
					</Provider>
				</BrowserRouter>
			);

			const expectedHeaderImage = screen.getByAltText('Rick and Morty logo');

			const expectedSortButtons = screen.getByRole('button', { name: 'Sort by Name' });

			const expectedFilterSelect = screen.getAllByTestId('select');
			const expectedButtons = screen.getAllByRole('button');

			const charactersList = screen.getByRole('list');

			const expectedSearchBarImage = screen.getByAltText('search icon');
			const expectedSearchBarInput = screen.getByRole('textbox');

			expect(expectedSearchBarImage).toBeInTheDocument();
			expect(expectedSearchBarInput).toBeInTheDocument();

			const expectedFooterParagraphText = 'Copyright © 2022';
			const expectedFooterParagraph = screen.getByText(expectedFooterParagraphText);

			expect(expectedHeaderImage).toBeInTheDocument();
			expect(expectedSortButtons).toBeInTheDocument();
			expect(expectedFilterSelect).toHaveLength(2);
			expect(expectedButtons).toHaveLength(5);
			expect(charactersList).toBeInTheDocument();
			expect(expectedFooterParagraph).toBeInTheDocument();
		});
	});
});
