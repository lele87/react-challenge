import styled from 'styled-components';

const StyledSortCharacters = styled.div`
	.dropbtn {
		background-color: #1e221b;
		color: #b2df28;
		border: none;
		font-weight: bolder;
		border-radius: 5px;
		padding: 12px;
		font-size: 16px;
		cursor: pointer;
	}
	.dropdown {
		position: relative;
		display: inline-block;
	}
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #ffff;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		width: 100%;
	}
	.dropdown-content button {
		color: #000;
		padding: 12px 16px;
		display: block;
		width: 100%;
		text-align: center;
		cursor: pointer;
		font-family: 'Roboto';
	}
	.dropdown-content button:hover {
		background-color: #ddd;
	}
	.dropdown:hover .dropdown-content {
		display: block;
	}
	.dropdown:hover .dropbtn {
		background-color: #f99459;
		color: #ffff;
	}
`;

export default StyledSortCharacters;
