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
`;

export default StyledHomePage;
