import styled from 'styled-components';

const StyledCharacter = styled.div`
	.character {
		min-width: 350px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #1e221b;
		margin-bottom: 120px;
		border-radius: 20px;
		margin-top: 70px;
		h2 {
			text-transform: uppercase;
			font-size: 1.8rem;
			padding-top: 20px;
			text-align: center;

			color: #b2df28;
		}
		span {
			color: #fff;
			font-size: 1.2rem;
			padding-bottom: 20px;
		}
		&__image-container {
			width: 300px;
			height: 300px;
			margin-top: -70px;
		}

		&__image {
			border-radius: 50%;
			object-fit: cover;
		}
	}
`;

export default StyledCharacter;
