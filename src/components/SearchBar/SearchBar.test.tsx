import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import SearchBar from './SearchBar';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => mockDispatch
}));

describe('Given a SearchBar component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 1 input and 1 image', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<SearchBar />
					</Provider>
				</BrowserRouter>
			);

			const expectedImage = screen.getByRole('img');
			const expectedInput = screen.getByRole('textbox');

			expect(expectedImage).toBeInTheDocument();
			expect(expectedInput).toBeInTheDocument();
		});
	});
	describe('When the user clicks on the image', () => {
		test('Then the dispatch should be invoked', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<SearchBar />
					</Provider>
				</BrowserRouter>
			);

			const expectedImage = screen.getByRole('img');
			userEvent.click(expectedImage);

			expect(mockDispatch).toHaveBeenCalled();
		});
	});
});
