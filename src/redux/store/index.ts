import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../features/characterSlice';
import detailCharacterReducer from '../features/detailCharacterSlice';
import paginationReducer from '../features/paginationSlice';
import uiReducer from '../features/uiSlice';

const store = configureStore({
	reducer: {
		characters: characterReducer,
		character: detailCharacterReducer,
		pagination: paginationReducer,
		ui: uiReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
