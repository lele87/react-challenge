import { mockCharacters } from '../../mocks/mockCharacters';
import { ICharacterState } from '../../types/types';
import characterSlice, { loadCharactersActionCreator } from './characterSlice';

describe('Given a load characters reducer', () => {
	describe('When it receives an initial state and a load action with the characters info', () => {
		test('Then it should return the new characters state with the received info', () => {
			const initialState: ICharacterState = {
				characterInfo: [],
				filterName: '',
				filterStatus: '',
				error: false
			};

			const characterInfo = mockCharacters;

			const expectedState = {
				characterInfo: [...mockCharacters],
				filterName: '',
				filterStatus: '',
				error: false
			};

			const loadAction = loadCharactersActionCreator(characterInfo);
			const characterStatus = characterSlice(initialState, loadAction);

			expect(characterStatus).toEqual(expectedState);
		});
	});
});
