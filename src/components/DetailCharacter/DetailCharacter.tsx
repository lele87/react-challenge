import { ICharacter } from '../../types/types';
import StyledDetailCharacter from './StyledDetailCharacter';

const DetailCharacter = ({
	character: { name, image, species, status, gender, origin }
}: {
	character: ICharacter;
}) => {
	return (
		<>
			<StyledDetailCharacter>
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
					<span>{gender}</span>
					<span>{origin.name}</span>
				</div>
			</StyledDetailCharacter>
		</>
	);
};

export default DetailCharacter;
