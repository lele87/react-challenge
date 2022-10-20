import styled from 'styled-components';

const StyledDetailCharacter = styled.div`
	.character {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--card-background-color);
		border-radius: 20px;
		height: 505px;
		margin: 0 3px 120px 3px;
		padding: 8px;

		h2 {
			text-transform: uppercase;
			font-size: 29px;
			padding-top: 20px;
			text-align: center;
			color: var(--color);
		}
		span {
			color: #fff;
			font-size: 19px;
			padding-bottom: 20px;
		}
		&__image--container {
			width: 300px;
			height: 300px;
			margin-top: -70px;
		}

		&__image {
			border-radius: 50%;
			object-fit: cover;
		}

		&__details--button {
			background-color: #000;
			border-radius: 10px;
			color: var(--color);
			font-size: 24px;
			width: 120px;
			height: 40px;
			margin-top: 10px;
			cursor: pointer;
			border: 1px solid #b2df28;
		}
	}
`;

export default StyledDetailCharacter;
