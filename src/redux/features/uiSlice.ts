import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		loaded: false
	},
	reducers: {
		loadedOn: ui => ({ loaded: true }),
		loadedOff: ui => ({ loaded: false })
	}
});

export const { loadedOff: loadedOffActionCreator, loadedOn: loadedOnActionCreator } = uiSlice.actions;

export default uiSlice.reducer;
