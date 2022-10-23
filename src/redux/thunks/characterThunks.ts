import axios from 'axios';
import {
	loadCharactersActionCreator,
	setErrorOffActionCreator,
	setErrorOnActionCreator
} from '../features/characterSlice';
import { setTotalPagesActionCreator } from '../features/paginationSlice';
import { loadedOffActionCreator, loadedOnActionCreator } from '../features/uiSlice';
import { AppDispatch } from '../store';

export const loadCharactersThunk =
	(pageNumber: number, name: string, status: string) => async (dispatch: AppDispatch) => {
		const url: string = `${process.env.REACT_APP_API_URL}?page=${pageNumber}&name=${name}&status=${status}`;

		try {
			dispatch(loadedOnActionCreator());
			const {
				data: {
					info: { pages, count },
					results
				}
			} = await axios.get(url);

			if (results) {
				console.log(count);
				dispatch(setTotalPagesActionCreator(pages));
				dispatch(setErrorOffActionCreator());
				dispatch(loadCharactersActionCreator(results));
				dispatch(loadedOffActionCreator());
			}
		} catch (error: any) {
			dispatch(loadedOffActionCreator());
			dispatch(setErrorOnActionCreator());
			return error.message;
		}
	};
