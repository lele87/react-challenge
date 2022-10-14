import StyledCharacter from './StyledCharacter';

const Character = () => {
	return (
		<>
			<StyledCharacter>
				<div className="character">
					<div className="character__image-container">
						<img
							width={300}
							height={300}
							className="character__image"
							src="test.png"
							alt={'Name from Rick and Morty Show'}
						></img>
					</div>
					<h2>Test</h2>
					<span>185cm</span>
				</div>
			</StyledCharacter>
		</>
	);
};

export default Character;
