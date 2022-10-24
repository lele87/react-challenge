import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Footer from './Footer';

describe('Given a Footer component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 1 paragraph', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Footer />
					</Provider>
				</BrowserRouter>
			);

			const expectedParagraphText = 'Copyright © 2022';
			const expectedParagraph = screen.getByText(expectedParagraphText);

			expect(expectedParagraph).toBeInTheDocument();
		});
	});
});
