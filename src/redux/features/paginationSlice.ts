import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPagination } from '../../types/types';

const initialState: IPagination = {
	currentPage: +(sessionStorage.getItem('currentPage') ?? 1),
	totalPages: 0,
	totalResults: 0
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
		}),
		setTotalResults: (pages, action: PayloadAction<number>) => ({
			...pages,
			totalResults: action.payload
		})
	}
});

export const {
	setNextPage: setNextPageActionCreator,
	setPreviousPage: setPreviousPageActionCreator,
	setTotalPages: setTotalPagesActionCreator,
	resetCurrentPage: resetCurrentPageActionCreator,
	setTotalResults: setTotalResultsActionCreator
} = paginationSlice.actions;

export default paginationSlice.reducer;
