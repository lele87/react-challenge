import { useEffect } from 'react';
import CharactersList from '../../components/CharactersList/CharactersList';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadCharactersThunk } from '../../redux/thunks/characterThunks';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const charactersList = useAppSelector(state => state.characters.characterInfo);

	useEffect(() => {
		dispatch(loadCharactersThunk());
	}, [dispatch]);

	return (
		<>
			<CharactersList charactersList={charactersList} />
		</>
	);
};

export default HomePage;
