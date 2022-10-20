import styled from 'styled-components';

const StyledFilter = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;

	.filter {
		display: flex;
		gap: 10px;

		@media (max-width: 675px) {
			display: flex;
			flex-direction: column;
		}
	}

	select {
		appearance: none;
		background-color: var(--card-background-color);
		box-shadow: var(--box-shadow);
		color: var(--color);
		border: 1px solid #000;
		padding: 6px 6px;
		margin: 0;
		width: 200px;
		font-size: 18px;
		font-weight: bolder;
		cursor: pointer;
		outline: none;
		border-radius: 5px;
		text-align: center;

		@media (max-width: 420px) {
			width: 150px;
		}
	}

	select:hover {
		background-color: var(--color);
		color: #ffff;
	}

	.select {
		width: 100%;

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

		& button {
			width: 100px;
			height: 100%;
			font-size: 15px;
			padding: 2px 2px;
			background-color: var(--color);
			color: #000;
			border-radius: 5px;
			border: 1px solid #000;
			cursor: pointer;
			box-shadow: var(--box-shadow);
		}
	}
`;

export default StyledFilter;
