import styled from 'styled-components';

const StyledFilter = styled.div`
	margin-top: 20px;

	select {
		appearance: none;
		background-color: var(--card-background-color);
		color: var(--color);
		border: 1px solid #000;
		padding: 6px 6px;
		margin: 0;
		width: 200px;
		font-size: 18px;
		cursor: pointer;
		line-height: inherit;
		outline: none;
		border-radius: 5px;
		text-align: center;
	}

	.select {
		width: 100%;
		padding: 4px 8px;
		font-size: 16px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		gap: 5px;
	}

	.filter__buttons {
		display: flex;
		width: 100%;
		gap: 10px;
		justify-content: center;
		margin-top: 10px;

		& button {
			width: 100px;
			height: 30px;
			font-size: 15px;
			padding: 2px 2px;
			background-color: #b2df28;
			color: #000;
			border-radius: 5px;
			border: 1px solid #000;
			cursor: pointer;
		}
	}
`;

export default StyledFilter;
