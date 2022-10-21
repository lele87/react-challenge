import styled from 'styled-components';

const StyledDetailPage = styled.div`
	.backhome__button--container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 40px;
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

export default StyledDetailPage;
