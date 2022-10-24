import {
	sortCharactersByNameAscendingActionCreator,
	sortCharactersByNameDescendingActionCreator
} from '../../redux/features/characterSlice';
import { useAppDispatch } from '../../redux/store/hooks';
import StyledSortCharacters from './StyledSortCharacters';

const SortCharacters = ({ charactersList }: any) => {
	const dispatch = useAppDispatch();

	const handleSortName = async (event: any) => {
		event.target.value === 'ascending'
			? dispatch(sortCharactersByNameAscendingActionCreator(charactersList))
			: dispatch(sortCharactersByNameDescendingActionCreator(charactersList));
	};

	return (
		<>
			<StyledSortCharacters className="dropdown--container">
				<div className="dropdown" data-testid="dropdown-navigation">
					<button className="dropdown__button">Sort by Name</button>
					<div className="dropdown--content" onClick={e => handleSortName(e)}>
						<button value="ascending">A - Z</button>
						<button value="descending">Z - A</button>
					</div>
				</div>
			</StyledSortCharacters>
		</>
	);
};

export default SortCharacters;
