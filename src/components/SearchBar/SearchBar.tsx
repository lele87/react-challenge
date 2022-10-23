import { useState } from 'react';
import { setFilterNameActionCreator } from '../../redux/features/characterSlice';
import { resetCurrentPageActionCreator } from '../../redux/features/paginationSlice';
import { useAppDispatch } from '../../redux/store/hooks';

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
		<div className="search">
			<input
				type="text"
				placeholder="Search characters by name"
				className="search__bar"
				onChange={changeSearchOption}
				value={searchOption}
			/>
			<button onClick={applyFilter}>search</button>
		</div>
	);
};

export default SearchBar;
