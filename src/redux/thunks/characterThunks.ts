import axios from 'axios';
import { loadCharactersActionCreator } from '../features/characterSlice';
import { setNextPageActionCreator, setPreviousPageActionCreator } from '../features/paginationSlice';
import { AppDispatch } from '../store';

export const loadCharactersThunk = (pageNumber: number) => async (dispatch: AppDispatch) => {
	const url: string = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
	try {
		const {
			data: { results }
		} = await axios.get(url);
		if (results) {
			setPreviousPageActionCreator();
			setNextPageActionCreator();
			dispatch(loadCharactersActionCreator(results));
		}
	} catch (error: any) {
		return error.message;
	}
};
