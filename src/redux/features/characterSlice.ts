import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter, ICharacterState } from '../../types/types';

const initialState: ICharacterState = {
	characterInfo: []
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
		})
	}
});

export const {
	loadCharacters: loadCharactersActionCreator,
	sortCharactersByNameAscending: sortCharactersByNameAscendingActionCreator,
	sortCharactersByNameDescending: sortCharactersByNameDescendingActionCreator
} = characterSlice.actions;

export default characterSlice.reducer;
