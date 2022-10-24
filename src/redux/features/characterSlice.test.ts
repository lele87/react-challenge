import { mockCharacters } from '../../mocks/mockCharacters';
import { ICharacterState } from '../../types/types';
import characterSlice, {
	loadCharactersActionCreator,
	setFilterNameActionCreator,
	setFilterStatusActionCreator
} from './characterSlice';

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

describe('Given a set filter name Reducer', () => {
	describe('When it receives an initial state with an array of 2 characters and a filter name action', () => {
		test('Then it should return a new character state with the array with the characters', () => {
			const initialState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: '',
				error: false
			};

			const filterCharacterByNameAction = setFilterNameActionCreator('Rick');

			const expectedNewState = {
				characterInfo: mockCharacters,
				filterName: 'Rick',
				filterStatus: '',
				error: false
			};

			const characterStatus = characterSlice(initialState, filterCharacterByNameAction);

			expect(characterStatus).toEqual(expectedNewState);
		});
	});
});

describe('Given a set filter status Reducer', () => {
	describe('When it receives an initial state with an array of 2 characters and a filter status action', () => {
		test('Then it should return a new character state with the array with the characters', () => {
			const initialState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: '',
				error: false
			};

			const filterCharacterByStatusAction = setFilterStatusActionCreator('Alive');

			const expectedNewState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: 'Alive',
				error: false
			};

			const characterStatus = characterSlice(initialState, filterCharacterByStatusAction);

			expect(characterStatus).toEqual(expectedNewState);
		});
	});
});
