import styled from 'styled-components';

const StyledCharactersList = styled.div`
	.character-container {
		/* width: 100%;
		min-width: 350px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center; */
		background-color: #cbf7ed;
		padding-top: 100px;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0px;

		@media (min-width: 601px) {
			flex-direction: row;
			margin: 0;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
		}

		@media (max-width: 898px) {
			flex-direction: row;
			margin: 0;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
		}

		@media (min-width: 899px) {
			flex-direction: row;
			margin: 0;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 20px;
		}
	}

	li {
		list-style: none;
		flex: 0 0 33%;
	}
`;

export default StyledCharactersList;
