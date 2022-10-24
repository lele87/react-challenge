import { useEffect } from 'react';
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

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(loadCharactersThunk(currentPage, filterName, filterStatus));
		sessionStorage.setItem('filterName', filterName);
		sessionStorage.setItem('filterStatus', filterStatus);
		sessionStorage.setItem('currentPage', `${currentPage}`);
	}, [dispatch, currentPage, filterName, filterStatus]);

	return (
		<>
			<StyledHomePage>
				<div className="content">
					<Header />
					<div className="filters--container">
						<SortCharacters charactersList={characterInfo} />
						<Filter />
					</div>
					<SearchBar />
					{error ? (
						<p className="characters__error--text">No characters found</p>
					) : (
						<>
							<CharactersList
								characterInfo={characterInfo}
								filterName={filterName}
								filterStatus={filterStatus}
							/>
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
