import styled from 'styled-components';

export const StyleHeader = styled.div`
	width: 100%;

	.header {
		background-color: #000;
		display: flex;
		flex-direction: column;
		align-items: center;

		.logo {
			width: 350px;
			padding: 50px 0;

			@media (max-width: 364px) {
				width: 300px;
			}

			@media (max-width: 306px) {
				width: 250px;
			}
		}
	}
`;

export default StyleHeader;
