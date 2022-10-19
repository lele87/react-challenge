import { useEffect } from 'react';
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

	useEffect(() => {
		window.localStorage.setItem('savedData', charactersList as any);
	}, [charactersList]);

	return (
		<>
			<StyledSortCharacters>
				<div className="dropdown__container">
					<div className="dropdown">
						<button className="dropdown__button">Sort by Name</button>
						<div className="dropdown--content" onClick={e => handleSortName(e)}>
							<button value="ascending">A - Z</button>
							<button value="descending">Z - A</button>
						</div>
					</div>
				</div>
			</StyledSortCharacters>
		</>
	);
};

export default SortCharacters;
