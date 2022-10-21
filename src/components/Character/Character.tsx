import { useNavigate } from 'react-router-dom';
import { ICharacter } from '../../types/types';
import Button from '../Button/Button';
import StyledCharacter from './StyledCharacter';

const Character = ({ character: { id, name, image, species, status } }: { character: ICharacter }) => {
	const navigate = useNavigate();

	const navigateToDetails = (id: string): void => {
		navigate(`/details/${id}`);
	};

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
						<Button
							className={'character__details--button'}
							onClick={() => navigateToDetails(id)}
							text={'Details'}
						/>
					</div>
				</div>
			</StyledCharacter>
		</>
	);
};

export default Character;
