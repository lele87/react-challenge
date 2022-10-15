import styled from 'styled-components';

const StyledCharacter = styled.div`
	.character {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #1e221b;
		border-radius: 20px;
		height: 360px;
		margin: 0 3px 120px 3px;
		padding: 8px;

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
		&__image--container {
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
