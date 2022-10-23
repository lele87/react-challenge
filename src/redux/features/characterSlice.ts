import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, ICharacterState } from '../../types/types';

const initialState: ICharacterState = {
	characterInfo: [],
	filterStatus: '',
	filterName: '',
	error: false
};

const characterSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		loadCharacters: (characters, action: PayloadAction<ICharacter[]>) => ({
			...characters,
			characterInfo: [...action.payload]
		}),
		sortCharactersByNameAscending: (characters, action: PayloadAction<ICharacter[]>) => ({
			...characters,
			characterInfo: [...characters.characterInfo].sort((a, b) => (a.name > b.name ? 1 : -1))
		}),
		sortCharactersByNameDescending: (characters, action: PayloadAction<ICharacter[]>) => ({
			...characters,
			characterInfo: [...characters.characterInfo].sort((a, b) => (a.name > b.name ? -1 : 1))
		}),
		setFilterName: (characters, action: PayloadAction<string>) => ({
			...characters,
			filterName: action.payload
		}),
		setFilterStatus: (characters, action: PayloadAction<string>) => ({
			...characters,
			filterStatus: action.payload
		}),
		setErrorOn: characters => ({
			...characters,
			error: true
		}),
		setErrorOff: characters => ({
			...characters,
			error: false
		})
	}
});

export const {
	loadCharacters: loadCharactersActionCreator,
	sortCharactersByNameAscending: sortCharactersByNameAscendingActionCreator,
	sortCharactersByNameDescending: sortCharactersByNameDescendingActionCreator,
	setFilterName: setFilterNameActionCreator,
	setFilterStatus: setFilterStatusActionCreator,
	setErrorOn: setErrorOnActionCreator,
	setErrorOff: setErrorOffActionCreator
} = characterSlice.actions;

export default characterSlice.reducer;
