import { useState } from 'react';
import { setFilterNameActionCreator, setFilterStatusActionCreator } from '../../redux/features/characterSlice';
import { resetCurrentPageActionCreator } from '../../redux/features/paginationSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import StyledFilter from './StyledFilter';

const Filter = () => {
	const dispatch = useAppDispatch();
	const [filterStatusOption, setFilterStatusOption] = useState('');
	const [filterNameOption, setFilterNameOption] = useState('');

	const changeStatusFilterOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterStatusOption(event.target.value);
	};

	const changeNameFilterOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterNameOption(event.target.value);
	};

	const applyFilter = async () => {
		dispatch(resetCurrentPageActionCreator());
		dispatch(setFilterStatusActionCreator(filterStatusOption));
		dispatch(setFilterNameActionCreator(filterNameOption));
		setFilterNameOption('');
		setFilterStatusOption('');
	};

	const clearFilters = () => {
		dispatch(resetCurrentPageActionCreator());
		setFilterNameOption('');
		setFilterStatusOption('');
		dispatch(setFilterStatusActionCreator(filterStatusOption));
		dispatch(setFilterNameActionCreator(filterNameOption));
	};

	return (
		<>
			<StyledFilter className="filter--container">
				<div className="filter">
					<div className="select">
						<select
							className="form-select"
							onChange={changeStatusFilterOption}
							value={filterStatusOption}
							placeholder="Search by status"
							id="search by status"
						>
							<option disabled value="">
								Filter by status
							</option>
							<option value="Alive">Alive</option>
							<option value="Dead">Dead</option>
							<option value="Unknown">Unknown</option>
						</select>
						<select
							className="form-select"
							onChange={changeNameFilterOption}
							value={filterNameOption}
							placeholder="Search by name"
							id="filter"
						>
							<option disabled value="">
								Filter by name
							</option>
							<option value="Rick">Rick</option>
							<option value="Morty">Morty</option>
							<option value="Summer">Summer</option>
						</select>
					</div>
					<div className="filter__buttons">
						<button onClick={applyFilter}>Filter</button>
						<button onClick={clearFilters}>Clear Filters</button>
					</div>
				</div>
			</StyledFilter>
		</>
	);
};

export default Filter;
