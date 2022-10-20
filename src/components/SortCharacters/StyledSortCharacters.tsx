import styled from 'styled-components';

const StyledSortCharacters = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px 0 0 0;

	.dropdown {
		position: relative;
		display: inline-block;

		&__button {
			background-color: var(--card-background-color);
			color: var(--color);
			border: none;
			font-weight: bolder;
			border-radius: 5px;
			padding: 12px;
			font-size: 16px;
			cursor: pointer;
		}
	}

	.dropdown--content {
		display: none;
		width: 100%;
		box-shadow: var(--box-shadow);
		z-index: 1;
	}

	.dropdown--content button {
		box-shadow: var(--box-shadow);
		padding: 12px 16px;
		display: block;
		width: 100%;
		text-align: center;
		cursor: pointer;
		background-color: #fff;
		border: 0.3px solid darkgrey;
	}

	.dropdown--content:hover button:hover {
		background-color: var(--color);
		color: #ffff;
	}

	.dropdown:hover .dropdown--content {
		display: block;
	}

	.dropdown:hover .dropdown__button {
		background-color: var(--color);
		color: #ffff;
	}
`;

export default StyledSortCharacters;
