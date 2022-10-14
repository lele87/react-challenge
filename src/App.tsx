import { useEffect } from 'react';
import CharactersList from './components/CharactersList/CharactersList';
import { useAppDispatch } from './redux/store/hooks';
import { loadCharactersThunk } from './redux/thunks/characterThunks';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadCharactersThunk());
	}, [dispatch]);
	return <CharactersList />;
}

export default App;
