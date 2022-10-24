import { IPagination } from '../../types/types';
import paginationSlice, {
	resetCurrentPageActionCreator,
	setNextPageActionCreator,
	setPreviousPageActionCreator,
	setTotalPagesActionCreator,
	setTotalResultsActionCreator
} from './paginationSlice';

describe('Given a pagination reducer', () => {
	describe('When it receives an initial state with a set next page action', () => {
		test('Then it should return the new pagination state with a currentPage value of 10', () => {
			const initialState: IPagination = {
				currentPage: 1,
				totalPages: 0,
				totalResults: 0
			};

			const expectedStatus = {
				currentPage: 2,
				totalPages: 0,
				totalResults: 0
			};

			const setNextPageAction = setNextPageActionCreator();

			const newStatus = paginationSlice(initialState, setNextPageAction);

			expect(newStatus).toEqual(expectedStatus);
		});
	});
	describe('When it receives an initial state with a setCurrentPage action', () => {
		test('Then it should return the new currentPage state with value 2', () => {
			const initialState = {
				currentPage: 2,
				totalPages: 0,
				totalResults: 0
			};

			const expectedStatus = {
				currentPage: 1,
				totalPages: 0,
				totalResults: 0
			};

			const setPreviousAction = setPreviousPageActionCreator();

			const newStatus = paginationSlice(initialState, setPreviousAction);

			expect(newStatus).toEqual(expectedStatus);
		});
	});
	describe('When it receives an initial state with a set total pages action', () => {
		test('Then it should return the new set total pages state with value 1', () => {
			const initialState = {
				currentPage: 1,
				totalPages: 0,
				totalResults: 0
			};

			const expectedStatus = {
				currentPage: 1,
				totalPages: 1,
				totalResults: 0
			};

			const expectedTotalPages = 1;
			const setTotalPagesAction = setTotalPagesActionCreator(expectedTotalPages);

			const newStatus = paginationSlice(initialState, setTotalPagesAction);

			expect(newStatus).toEqual(expectedStatus);
		});
	});

	describe('When it receives a state with a reset current page action', () => {
		test('Then it should return the initial state with value 1', () => {
			const initialState = {
				currentPage: 2,
				totalPages: 0,
				totalResults: 0
			};

			const expectedStatus = {
				currentPage: 1,
				totalPages: 0,
				totalResults: 0
			};

			const resetCurrentPageAction = resetCurrentPageActionCreator();

			const newStatus = paginationSlice(initialState, resetCurrentPageAction);

			expect(newStatus).toEqual(expectedStatus);
		});
	});

	describe('When it receives a state with a set total results action', () => {
		test('Then it should return the initial state with value 1', () => {
			const initialState = {
				currentPage: 1,
				totalPages: 0,
				totalResults: 0
			};

			const expectedStatus = {
				currentPage: 1,
				totalPages: 0,
				totalResults: 1
			};

			const expectedResults = 1;
			const setTotalResultsAction = setTotalResultsActionCreator(expectedResults);

			const newStatus = paginationSlice(initialState, setTotalResultsAction);

			expect(newStatus).toEqual(expectedStatus);
		});
	});
});
