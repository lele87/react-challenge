import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Filter from './Filter';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatch
}));

describe('Given a Filter component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 2 select and 2 buttons', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Filter />
					</Provider>
				</BrowserRouter>
			);

			const expectedSelectNumber = 2;
			const expectedButtonsNumber = 2;

			const expectedSelect = screen.getAllByTestId('select');
			const expectedButtons = screen.getAllByRole('button');

			expect(expectedSelect).toHaveLength(expectedSelectNumber);
			expect(expectedButtons).toHaveLength(expectedButtonsNumber);
		});
	});
	describe('When the user clicks on one of the filters button', () => {
		test('Then the dispatch should be invoked', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Filter />
					</Provider>
				</BrowserRouter>
			);

			const filterButton = screen.getByRole('button', { name: 'Filter' });
			const clearFiltersButton = screen.getByRole('button', { name: 'Clear Filters' });

			userEvent.click(filterButton);
			userEvent.click(clearFiltersButton);

			expect(mockDispatch).toHaveBeenCalled();
		});
	});
});
