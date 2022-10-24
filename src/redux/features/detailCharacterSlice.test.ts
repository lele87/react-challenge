import { mockCharacters } from '../../mocks/mockCharacters';
import { ICharacter } from '../../types/types';
import detailCharacterSlice, { loadSingleCharacterActionCreator } from './detailCharacterSlice';

describe('Given a load single character reducer', () => {
	describe('When it receives an initial state and a load action with the character info', () => {
		test('Then it should return the new character state with the received info', () => {
			const initialState: ICharacter = {
				name: '',
				id: '',
				status: '',
				image: '',
				species: '',
				gender: '',
				origin: {
					name: ''
				}
			};

			const loadSingleCharacterAction = mockCharacters[0];

			const expectedState = { ...loadSingleCharacterAction };

			const loadAction = loadSingleCharacterActionCreator(loadSingleCharacterAction);
			const characterStatus = detailCharacterSlice(initialState, loadAction);

			expect(characterStatus).toEqual(expectedState);
		});
	});
});
