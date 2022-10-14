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
		})
	}
});

export const { loadCharacters: loadCharactersActionCreator } = characterSlice.actions;

export default characterSlice.reducer;
