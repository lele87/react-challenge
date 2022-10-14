import { useAppSelector } from '../../redux/store/hooks';
import { ICharacter } from '../../types/types';
import Character from '../Character/Character';
import StyledCharactersList from './StyledCharactersList';

const CharactersList = () => {
	const charactersList = useAppSelector(state => state.characters.characterInfo);

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
