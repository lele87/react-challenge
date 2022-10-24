import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockCharacters } from '../../mocks/mockCharacters';
import store from '../../redux/store';
import CharactersList from './CharactersList';

describe('Given a PizzeriaList component', () => {
	describe("When it's instanciatedd", () => {
		test('Then it should create one ul element', () => {
			render(
				<BrowserRouter>
					<Provider store={store}>
						<CharactersList characterInfo={mockCharacters} filterName={''} filterStatus={''} />
					</Provider>
				</BrowserRouter>
			);

			const charactersList = screen.getByRole('list');

			expect(charactersList).toBeInTheDocument();
		});
	});
});
