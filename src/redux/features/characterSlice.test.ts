import { mockCharacters } from '../../mocks/mockCharacters';
import { ICharacterState } from '../../types/types';
import characterSlice, {
	loadCharactersActionCreator,
	setErrorOffActionCreator,
	setErrorOnActionCreator,
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
	describe('When it receives an initial state with an array of 2 characters and a filter name action', () => {
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

describe('Given a set error on Reducer', () => {
	describe('When it receives an initial state with an array of 2 characters and an error on action', () => {
		test('Then it should return a new character state with the error true', () => {
			const initialState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: '',
				error: false
			};

			const setErrorOnAction = setErrorOnActionCreator();

			const expectedNewState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: '',
				error: true
			};

			const characterStatus = characterSlice(initialState, setErrorOnAction);

			expect(characterStatus).toEqual(expectedNewState);
		});
	});
});

describe('Given a set error off Reducer', () => {
	describe('When it receives an initial state with an array of 2 characters and an error off action', () => {
		test('Then it should return a new character state with the error false', () => {
			const initialState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: '',
				error: true
			};

			const setErrorOffAction = setErrorOffActionCreator();

			const expectedNewState = {
				characterInfo: mockCharacters,
				filterName: '',
				filterStatus: '',
				error: false
			};

			const characterStatus = characterSlice(initialState, setErrorOffAction);

			expect(characterStatus).toEqual(expectedNewState);
		});
	});
});
