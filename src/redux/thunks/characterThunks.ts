import axios from 'axios';
import { loadCharactersActionCreator } from '../features/characterSlice';
import { AppDispatch } from '../store';

export const loadCharactersThunk = () => async (dispatch: AppDispatch) => {
	const url: string = 'https://rickandmortyapi.com/api/character/?page=1';

	try {
		const {
			data: { results }
		} = await axios.get(url);

		if (results) {
			dispatch(loadCharactersActionCreator(results));
		}
	} catch (error: any) {
		return error.message;
	}
};
