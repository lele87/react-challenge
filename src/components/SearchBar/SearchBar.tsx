import { useState } from 'react';
import { setFilterNameActionCreator } from '../../redux/features/characterSlice';
import { resetCurrentPageActionCreator } from '../../redux/features/paginationSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import StyledSearchBar from './StyledSearchBar';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const [searchOption, setSearchOption] = useState('');

	const changeSearchOption = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchOption(event.target.value);
	};

	const applyFilter = async () => {
		dispatch(resetCurrentPageActionCreator());
		dispatch(setFilterNameActionCreator(searchOption));
		setSearchOption('');
	};

	return (
		<>
			<StyledSearchBar>
				<div className="search">
					<input
						type="text"
						placeholder="Search characters by name"
						className="search__term"
						onChange={changeSearchOption}
						value={searchOption}
					/>
					<img
						src="/images/magnifying-glass-solid.svg"
						alt="search icon"
						className="search__icon"
						onClick={applyFilter}
					/>
				</div>
			</StyledSearchBar>
		</>
	);
};

export default SearchBar;
