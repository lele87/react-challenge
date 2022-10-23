import { setNextPageActionCreator, setPreviousPageActionCreator } from '../../redux/features/paginationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import StyledPagination from './StyledPagination';

const Pagination = () => {
	const dispatch = useAppDispatch();
	const { currentPage, totalPages } = useAppSelector(state => state.pagination);

	const goToPreviousPage = () => {
		dispatch(setPreviousPageActionCreator());
	};

	const goToNextPage = () => {
		dispatch(setNextPageActionCreator());
	};

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
