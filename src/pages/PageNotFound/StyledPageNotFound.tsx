import styled from 'styled-components';

const StyledPageNotFound = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: 'Ubuntu';

	.message {
		font-size: 25px;
		font-weight: 400;
		text-align: center;
		letter-spacing: 3px;
	}

	.content {
		height: 66.5vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 200px;
		height: 200px;
	}

	.backhome__button {
		background-color: var(--card-background-color);
		color: var(--color);
		border: 2px solid #b2df28;
		font-weight: bolder;
		font-size: 25px;
		cursor: pointer;
	}
`;

export default StyledPageNotFound;
