import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagination } from '../../types/types';

const initialState: IPagination = {
	currentPage: 1,
	totalPages: 0
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
		}),
		setTotalPages: (pages, action: PayloadAction<number>) => ({
			...pages,
			totalPages: action.payload
		}),
		resetCurrentPage: pages => ({
			...pages,
			currentPage: 1
		})
	}
});

export const {
	setNextPage: setNextPageActionCreator,
	setPreviousPage: setPreviousPageActionCreator,
	setTotalPages: setTotalPagesActionCreator,
	resetCurrentPage: resetCurrentPageActionCreator
} = paginationSlice.actions;

export default paginationSlice.reducer;
