import { createSlice } from '@reduxjs/toolkit';
import { IPagination } from '../../types/types';

const initialState: IPagination = {
	currentPage: 1,
	totalPages: 42
};

const paginationSlice = createSlice({
	name: 'pagination',
	initialState,
	reducers: {
		setNextPage: pages => ({
			...pages,
			currentPage: pages.currentPage + 1
		}),
		setPreviousPage: pages => ({
			...pages,
			currentPage: pages.currentPage - 1
		})
	}
});

export const { setNextPage: setNextPageActionCreator, setPreviousPage: setPreviousPageActionCreator } =
	paginationSlice.actions;

export default paginationSlice.reducer;
