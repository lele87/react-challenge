import styled from 'styled-components';
import { setNextPageActionCreator, setPreviousPageActionCreator } from '../../redux/features/paginationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const { currentPage, totalPages } = useAppSelector(state => state.pagination);

	const goToPreviousPage = () => {
		dispatch(setPreviousPageActionCreator());
	};

	const goToNextPage = () => {
		dispatch(setNextPageActionCreator());
	};

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

	return (
		<StyledPagination className="pagination--container">
			<div className="pagination">
				<button disabled={currentPage === 1} onClick={goToPreviousPage} className="pagination__button">
					Previous
				</button>
				<span>
					{currentPage} / {totalPages}
				</span>
				<button disabled={currentPage === totalPages} onClick={goToNextPage} className="pagination__button">
					Next
				</button>
			</div>
		</StyledPagination>
	);
};

export default Pagination;
