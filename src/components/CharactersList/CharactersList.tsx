import { ICharacter } from '../../types/types';
import Character from '../Character/Character';
import StyledCharactersList from './StyledCharactersList';

const CharactersList = ({ charactersList }: any) => {
	return (
		<StyledCharactersList>
			<div className="character-container">
				<ul>
					{charactersList.map((character: ICharacter) => {
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
