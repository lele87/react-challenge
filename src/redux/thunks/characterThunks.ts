import axios from 'axios';
import { loadCharactersActionCreator } from '../features/characterSlice';
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
					info: { pages },
					results
				}
			} = await axios.get(url);

			if (results) {
				dispatch(setTotalPagesActionCreator(pages));
				dispatch(loadCharactersActionCreator(results));
				dispatch(loadedOffActionCreator());
			}
		} catch (error: any) {
			dispatch(loadedOffActionCreator());
			return error.message;
		}
	};
