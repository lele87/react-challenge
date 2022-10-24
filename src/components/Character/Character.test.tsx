import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockCharacters } from '../../mocks/mockCharacters';
import store from '../../redux/store';
import Character from './Character';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useNavigate: () => mockedUsedNavigate
}));

describe('Given a Character component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 1 heading and 1 image', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Character character={mockCharacters[0]} />
					</Provider>
				</BrowserRouter>
			);

			const expectedHeading = screen.getByRole('heading');
			const expectedImage = screen.getByRole('img');

			expect(expectedHeading).toBeInTheDocument();
			expect(expectedImage).toBeInTheDocument();
		});

		describe('When the users clicks on the details button', () => {
			test('Then it should navigate to the Details Page', () => {
				render(
					<BrowserRouter>
						<Provider store={store}>
							<Character character={mockCharacters[0]} />
						</Provider>
					</BrowserRouter>
				);

				const detailsButton = screen.getByRole('button');
				userEvent.click(detailsButton);

				expect(mockedUsedNavigate).toHaveBeenCalledWith('/details/1');
			});
		});
	});
});
