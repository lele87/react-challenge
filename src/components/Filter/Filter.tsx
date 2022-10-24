import { useState } from 'react';
import { setFilterNameActionCreator, setFilterStatusActionCreator } from '../../redux/features/characterSlice';
import { resetCurrentPageActionCreator } from '../../redux/features/paginationSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import Button from '../Button/Button';
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
		await dispatch(setFilterStatusActionCreator(filterStatusOption));
		await dispatch(setFilterNameActionCreator(filterNameOption));
		setFilterNameOption('');
		setFilterStatusOption('');
	};

	const clearFilters = () => {
		dispatch(setFilterStatusActionCreator(''));
		dispatch(setFilterNameActionCreator(''));
		dispatch(resetCurrentPageActionCreator());
		setFilterNameOption('');
		setFilterStatusOption('');
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
							data-testid="select"
						>
							<option disabled value="">
								Filter by Status
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
							data-testid="select"
						>
							<option disabled value="">
								Filter by Name
							</option>
							<option value="Rick">Rick</option>
							<option value="Morty">Morty</option>
							<option value="Summer">Summer</option>
						</select>
					</div>
					<div className="filter__buttons">
						<Button text={'Filter'} className={'apply__filter--button'} onClick={applyFilter} />
						<Button text={'Clear Filters'} className={'clear__filter--button'} onClick={clearFilters} />
					</div>
				</div>
			</StyledFilter>
		</>
	);
};

export default Filter;
