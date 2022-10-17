import { useEffect } from 'react';
import CharactersList from '../../components/CharactersList/CharactersList';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadCharactersThunk } from '../../redux/thunks/characterThunks';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { currentPage } = useAppSelector(state => state.pagination);
	const { characterInfo } = useAppSelector(state => state.characters);

	useEffect(() => {
		dispatch(loadCharactersThunk(currentPage));
		window.scrollTo(0, 0);
	}, [dispatch, currentPage]);

	return (
		<>
			<Header />
			<CharactersList charactersList={characterInfo} />
			<Pagination />
		</>
	);
};

export default HomePage;
