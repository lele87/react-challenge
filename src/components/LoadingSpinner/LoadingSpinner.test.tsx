import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import LoadingSpinner from './LoadingSpinner';

describe('Given a Footer component', () => {
	describe("When it's invoked", () => {
		test('Then it should render the text "Loading…"', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<LoadingSpinner />
					</Provider>
				</BrowserRouter>
			);

			const expectedText = screen.getByText('Loading…');

			expect(expectedText).toBeInTheDocument();
		});
	});
});
