import { useAppSelector } from '../../redux/store/hooks';
import { ICharacter, ICharactersListProps } from '../../types/types';
import Character from '../Character/Character';
import StyledCharactersList from './StyledCharactersList';

const CharactersList = ({ characterInfo, filterName, filterStatus }: ICharactersListProps) => {
	const { totalResults } = useAppSelector(state => state.pagination);

	const filteredCharacters = characterInfo.filter(
		(character: { name: string; status: string }) =>
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
