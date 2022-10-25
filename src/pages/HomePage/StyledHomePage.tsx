import styled from 'styled-components';

const StyledHomePage = styled.div`
	display: flex;
	flex-direction: column;

	.content {
		min-height: calc(100vh - 80px);
	}

	.characters__error--text {
		text-align: center;
		margin-top: 130px;
		font-size: 28px;
	}

	.filters--container {
		display: flex;
		gap: 50px;
		justify-content: space-evenly;

		@media (max-width: 929px) {
			flex-direction: column;
		}
	}
`;

export default StyledHomePage;
