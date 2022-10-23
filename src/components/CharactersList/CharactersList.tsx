import { ICharacter, ICharactersListProps } from '../../types/types';
import Character from '../Character/Character';
import StyledCharactersList from './StyledCharactersList';

const CharactersList = ({ charactersList, query }: ICharactersListProps) => {
	const filteredCharacters = charactersList.filter(
		character =>
			character.name.toLowerCase().includes(query.toLowerCase()) ||
			character.status.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<StyledCharactersList>
			<div className="character-container">
				<p>{charactersList.length} results</p>
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
