import styled from 'styled-components';

const StyledDetailCharacter = styled.div`
	width: 100%;
	margin: 140px auto;

	.character__property--container {
		display: flex;
		flex-wrap: wrap;
	}

	.character {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: var(--card-background-color);
		border-radius: 20px;
		width: 90%;
		max-width: 600px;
		height: 100%;
		margin: 0 auto;
		padding: 20px 5px;

		&__name {
			text-transform: uppercase;
			font-size: 40px;
			padding-top: 20px;
			text-align: center;
			color: var(--color);
		}

		.character__property {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			flex: 0 50%;
			gap: 12px;
			color: #fff;
		}

		span {
			color: var(--color);
			font-size: 21px;
			padding-bottom: 20px;
		}
		&__image--container {
			margin-top: -70px;

			@media (min-width: 339px) {
				width: 300px;
				height: 300px;
			}
		}

		&__image {
			border-radius: 50%;
			object-fit: cover;

			@media (max-width: 338px) {
				width: 230px;
				height: 230px;
			}
		}
	}
`;

export default StyledDetailCharacter;
