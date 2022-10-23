import styled from 'styled-components';

const StyledPagination = styled.div`
	display: block;
	margin-bottom: 20px;

	.pagination {
		display: flex;
		justify-content: space-around;
		align-items: center;

		&__button {
			background-color: #000;
			border-radius: 10px;
			border: none;
			color: var(--background-color);
			font-size: 24px;
			width: 120px;
			height: 40px;
			cursor: pointer;

			:disabled {
				pointer-events: none;
				background-color: var(--background-color);
				border: none;
			}
		}
	}

	span {
		font-size: 24px;
	}
`;

export default StyledPagination;
