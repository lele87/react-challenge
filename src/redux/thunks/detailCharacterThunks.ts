import axios from 'axios';
import { ICharacterResponseApi } from '../../types/types';
import { loadSingleCharacterActionCreator } from '../features/detailCharacterSlice';
import { loadedOnActionCreator, loadedOffActionCreator } from '../features/uiSlice';
import { AppDispatch } from '../store';

export const loadSingleCharacterThunk = (id: string) => async (dispatch: AppDispatch) => {
	const url: string = `${process.env.REACT_APP_API_URL}${id}`;

	try {
		dispatch(loadedOnActionCreator());
		const { data }: ICharacterResponseApi = await axios.get(url);

		if (data) {
			dispatch(loadSingleCharacterActionCreator(data));
			dispatch(loadedOffActionCreator());
		}
	} catch (error: any) {
		dispatch(loadedOffActionCreator());
		return error.message;
	}
};
