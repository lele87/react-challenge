import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../types/types';

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

const detailCharacterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		loadSingleCharacter: (character, action: PayloadAction<ICharacter>) => ({
			...action.payload
		})
	}
});

export const { loadSingleCharacter: loadSingleCharacterActionCreator } = detailCharacterSlice.actions;

export default detailCharacterSlice.reducer;
