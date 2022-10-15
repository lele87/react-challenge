import { ICharacter } from '../../types/types';
import StyledCharacter from './StyledCharacter';

const Character = ({ character: { name, image } }: { character: ICharacter }) => {
	return (
		<>
			<StyledCharacter>
				<div className="character">
					<div className="character__image--container">
						<img
							width={300}
							height={300}
							className="character__image"
							src={image}
							alt={`${name} from Rick and Morty Show`}
						></img>
					</div>
					<h2>{name}</h2>
				</div>
			</StyledCharacter>
		</>
	);
};

export default Character;
