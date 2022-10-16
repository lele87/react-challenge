import styled from 'styled-components';

const StyledPagination = styled.div`
	.pagination {
		background-color: #b2df28;
		height: 80px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;

		&__button {
			background-color: #000;
			border-radius: 10px;
			color: #b2df28;
			font-size: 24px;
			width: 120px;
			height: 40px;
			cursor: pointer;

			:disabled {
				pointer-events: none;
				background-color: #b2df28;
				border: none;
			}
		}

		span {
			font-size: 24px;
		}
	}
`;

export default StyledPagination;
