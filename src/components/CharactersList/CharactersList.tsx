import { ICharacter } from '../../types/types';
import Character from '../Character/Character';
import StyledCharactersList from './StyledCharactersList';

const CharactersList = ({ characters }: any) => {
	return (
		<StyledCharactersList>
			<div className="character-container">
				<ul>
					{characters.map((character: ICharacter) => {
						return (
							<li key={character.id}>
								<Character />
							</li>
						);
					})}
				</ul>
			</div>
		</StyledCharactersList>
	);
};

export default CharactersList;
