import styled from 'styled-components';

export const StyledFooter = styled.div`
	background-color: var(--color);
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.footer__text {
		@media (max-width: 269px) {
			text-align: center;
		}
	}
`;
