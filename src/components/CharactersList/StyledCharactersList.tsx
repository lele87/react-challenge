import styled from 'styled-components';

const StyledCharactersList = styled.div`
	margin-top: 250px;

	@media (max-width: 675px) {
		margin-top: 205px;
	}

	.character--container {
		text-align: center;

		.character__results {
			font-size: 22px;
			margin-bottom: 90px;
		}
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 32px;
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

	span {
		font-weight: bolder;
	}
`;

export default StyledCharactersList;
