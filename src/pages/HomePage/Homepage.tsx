import { useEffect } from 'react';
import CharactersList from '../../components/CharactersList/CharactersList';
import Pagination from '../../components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadCharactersThunk } from '../../redux/thunks/characterThunks';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const charactersList = useAppSelector(state => state.characters.characterInfo);
	const { currentPage } = useAppSelector(state => state.pagination);

	useEffect(() => {
		dispatch(loadCharactersThunk(currentPage));
		window.scrollTo(0, 0);
	}, [dispatch, currentPage]);

	return (
		<>
			<CharactersList charactersList={charactersList} />
			<Pagination />
		</>
	);
};

export default HomePage;
