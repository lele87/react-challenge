import { useAppSelector } from '../../redux/store/hooks';
import { ICharacter } from '../../types/types';
import Character from '../Character/Character';
import StyledCharactersList from './StyledCharactersList';

const CharactersList = () => {
	const { totalResults } = useAppSelector(state => state.pagination);
	const { characterInfo, filterName, filterStatus } = useAppSelector(state => state.characters);

	const filteredCharacters = characterInfo.filter(
		character =>
			character.name.toLowerCase().includes(filterName.toLowerCase()) ||
			character.status.toLowerCase().includes(filterStatus.toLowerCase())
	);

	return (
		<StyledCharactersList>
			<div className="character--container">
				<p className="character__results">
					{totalResults} results <span>{filterName}</span> <span>{filterStatus}</span>
				</p>
				<ul>
					{filteredCharacters.map((character: ICharacter) => {
						return (
							<li key={character.id}>
								<Character character={character} />
							</li>
						);
					})}
				</ul>
			</div>
		</StyledCharactersList>
	);
};

export default CharactersList;
