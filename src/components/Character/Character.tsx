import { ICharacter } from '../../types/types';
import StyledCharacter from './StyledCharacter';

const Character = ({ character: { name, image, species, status } }: { character: ICharacter }) => {
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
					<span>
						{species} | {status}
					</span>
					<div className="character__details">
						<button className="character__details--button">Details</button>
					</div>
				</div>
			</StyledCharacter>
		</>
	);
};

export default Character;
