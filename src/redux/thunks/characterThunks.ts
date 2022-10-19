import axios from 'axios';
import { loadCharactersActionCreator } from '../features/characterSlice';
import { setTotalPagesActionCreator } from '../features/paginationSlice';
import { AppDispatch } from '../store';

export const loadCharactersThunk =
	(pageNumber: number, name: string, status: string) => async (dispatch: AppDispatch) => {
		const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${name}&status=${status}`;

		try {
			const {
				data: {
					info: { pages },
					results
				}
			} = await axios.get(url);

			if (results) {
				dispatch(setTotalPagesActionCreator(pages));
				dispatch(loadCharactersActionCreator(results));
			}
		} catch (error: any) {
			return error.message;
		}
	};
