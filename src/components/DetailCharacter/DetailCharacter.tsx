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
					<h2 className="character__name">{name}</h2>
					<div className="character__property--container">
						<h3 className="character__property">
							Species<span>{species}</span>
						</h3>
						<h3 className="character__property">
							Status<span>{status}</span>
						</h3>
						<h3 className="character__property">
							Gender<span>{gender}</span>
						</h3>
						<h3 className="character__property">
							Origin<span>{origin.name}</span>
						</h3>
					</div>
				</div>
			</StyledDetailCharacter>
		</>
	);
};

export default DetailCharacter;
