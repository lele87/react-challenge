import { useEffect, useState } from 'react';
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import SortCharacters from '../../components/SortCharacters/SortCharacters';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadCharactersThunk } from '../../redux/thunks/characterThunks';
import StyledHomePage from './StyledHomePage';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { currentPage } = useAppSelector(state => state.pagination);
	const { characterInfo, filterName, filterStatus } = useAppSelector(state => state.characters);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [query, setQuery] = useState('');

	useEffect(() => {
		dispatch(loadCharactersThunk(currentPage, filterName, filterStatus));
		window.scrollTo(0, 0);
	}, [dispatch, currentPage, query, filterName, filterStatus]);

	return (
		<>
			<StyledHomePage>
				<Header />
				<Filter />
				<SortCharacters charactersList={characterInfo} />
				<CharactersList charactersList={characterInfo} query={query} />
				<Pagination />
			</StyledHomePage>
		</>
	);
};

export default HomePage;
