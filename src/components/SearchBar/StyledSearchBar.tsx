import styled from 'styled-components';

const StyledSearchBar = styled.div`
	width: 30%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.search {
		width: 100%;
		position: relative;
		display: flex;
	}

	.search__term {
		width: 100%;
		border: 3px solid #00b4cc;
		border-right: none;
		padding: 5px;
		border-radius: 5px 0 0 5px;
		outline: none;
		color: #9dbfaf;
	}

	.search__term:focus {
		color: #00b4cc;
	}

	.search__icon {
		width: 28px;
		background-color: #00b4cc;
		padding: 3.5px;
		cursor: pointer;
		border-radius: 0 5px 5px 0;
	}
`;

export default StyledSearchBar;
