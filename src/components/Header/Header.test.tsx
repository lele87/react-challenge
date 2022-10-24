import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Header from './Header';

describe('Given a Header component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 1 image', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Header />
					</Provider>
				</BrowserRouter>
			);

			const expectedImage = screen.getByRole('img');

			expect(expectedImage).toBeInTheDocument();
		});
	});
});
