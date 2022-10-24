import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Pagination from './Pagination';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatch
}));

describe('Given a Pagination component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 2 buttons', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Pagination />
					</Provider>
				</BrowserRouter>
			);

			const expectedButtons = screen.getAllByRole('button');
			const expectedButtonsNumber = 2;

			expect(expectedButtons).toHaveLength(expectedButtonsNumber);
		});
	});
	describe('When the user clicks on next page button', () => {
		test('Then the dispatch should be invoked', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Pagination />
					</Provider>
				</BrowserRouter>
			);

			const nextPageButton = screen.getByRole('button', { name: 'Next' });

			userEvent.click(nextPageButton);

			expect(mockDispatch).toHaveBeenCalled();
		});
	});
});
