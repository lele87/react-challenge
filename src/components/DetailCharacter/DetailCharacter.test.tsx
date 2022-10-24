import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockCharacters } from '../../mocks/mockCharacters';
import store from '../../redux/store';
import DetailCharacter from './DetailCharacter';

describe('Given a Character component', () => {
	describe("When it's invoked", () => {
		test('Then it should render 5 heading and 1 image', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<DetailCharacter character={mockCharacters[0]} />
					</Provider>
				</BrowserRouter>
			);

			const expectedHeading = screen.getAllByRole('heading');
			const expectedNumberHeadings = 5;
			const expectedImage = screen.getByRole('img');

			expect(expectedHeading).toHaveLength(expectedNumberHeadings);
			expect(expectedImage).toBeInTheDocument();
		});
	});
});
