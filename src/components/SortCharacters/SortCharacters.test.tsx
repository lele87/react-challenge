import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockCharacters } from '../../mocks/mockCharacters';
import store from '../../redux/store';
import SortCharacters from './SortCharacters';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatch
}));

describe('Given a Sort Characters component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 1 button', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<SortCharacters charactersList={mockCharacters} />
					</Provider>
				</BrowserRouter>
			);

			const expectedButtons = screen.getByRole('button', { name: 'Sort by Name' });

			expect(expectedButtons).toBeInTheDocument();
		});
	});
});
