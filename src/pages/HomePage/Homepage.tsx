import { useEffect, useState } from 'react';
import CharactersList from '../../components/CharactersList/CharactersList';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortCharacters from '../../components/SortCharacters/SortCharacters';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadCharactersThunk } from '../../redux/thunks/characterThunks';
import StyledHomePage from './StyledHomePage';

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { currentPage } = useAppSelector(state => state.pagination);
	const { characterInfo, filterName, filterStatus, error } = useAppSelector(state => state.characters);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [query, setQuery] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(loadCharactersThunk(currentPage, filterName, filterStatus));
		sessionStorage.setItem('currentPage', `${currentPage}`);
	}, [dispatch, currentPage, query, filterName, filterStatus]);

	return (
		<>
			<StyledHomePage>
				<div className="content">
					<Header />
					<Filter />
					<SortCharacters charactersList={characterInfo} />
					<SearchBar />
					{error ? (
						<p className="characters__error--text">No characters found</p>
					) : (
						<>
							<CharactersList charactersList={characterInfo} query={query} />
							<Pagination />
						</>
					)}
				</div>
				<Footer />
			</StyledHomePage>
		</>
	);
};

export default HomePage;
