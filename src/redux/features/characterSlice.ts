import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, ICharacterState } from '../../types/types';

const initialState: ICharacterState = {
	characterInfo: [],
	filterStatus: '',
	filterName: ''
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
		})
	}
});

export const {
	loadCharacters: loadCharactersActionCreator,
	sortCharactersByNameAscending: sortCharactersByNameAscendingActionCreator,
	sortCharactersByNameDescending: sortCharactersByNameDescendingActionCreator,
	setFilterName: setFilterNameActionCreator,
	setFilterStatus: setFilterStatusActionCreator
} = characterSlice.actions;

export default characterSlice.reducer;
