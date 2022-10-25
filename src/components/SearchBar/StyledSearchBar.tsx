import styled from 'styled-components';

const StyledSearchBar = styled.div`
	width: 40%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 675px) {
		margin-top: 110px;
	}

	@media (min-width: 676px) and (max-width: 929px) {
		margin-top: 100px;
	}

	@media (min-width: 391px) and (max-width: 516px) {
		width: 52%;
	}

	@media (max-width: 929px) {
		width: 65%;
	}

	.search {
		width: 100%;
		position: relative;
		display: flex;
	}

	.search__term {
		width: 100%;
		height: 40px;
		border: 3px solid var(--color);
		border-right: none;
		padding: 5px;
		border-radius: 5px 0 0 5px;
		outline: none;
		color: #9dbfaf;
	}

	.search__term:focus {
		color: #000;
	}

	.search__icon {
		width: 28px;
		background-color: var(--color);
		padding: 3.5px;
		cursor: pointer;
		border-radius: 0 5px 5px 0;
	}
`;

export default StyledSearchBar;
