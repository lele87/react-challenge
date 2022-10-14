import styled from 'styled-components';

const StyledCharactersList = styled.div`
	.character-container {
		width: 100%;
		min-width: 350px;
		background-color: #cbf7ed;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 100px;
		text-align: center;

		ul {
			list-style: none;
			padding: 0;
		}
		li {
			list-style: none;
		}
	}
`;

export default StyledCharactersList;
