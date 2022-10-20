import axios from 'axios';
import { loadSingleCharacterActionCreator } from '../features/detailCharacterSlice';
import { AppDispatch } from '../store';

export const loadSingleCharacterThunk = (id: string) => async (dispatch: AppDispatch) => {
	const url: string = `${process.env.REACT_APP_API_URL}${id}`;

	try {
		const { data } = await axios.get(url);

		if (data) {
			dispatch(loadSingleCharacterActionCreator(data));
		}
	} catch (error: any) {
		return error.message;
	}
};
