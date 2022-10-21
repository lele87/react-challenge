import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DetailCharacter from '../../components/DetailCharacter/DetailCharacter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadSingleCharacterThunk } from '../../redux/thunks/detailCharacterThunks';
import StyledDetailPage from './StyledDetaiPage';

const DetailPage = () => {
	const { character } = useAppSelector(state => state);
	const { idCharacter } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/');
	};

	useEffect(() => {
		dispatch(loadSingleCharacterThunk(idCharacter as string));
	}, [dispatch, idCharacter]);

	return (
		<>
			<StyledDetailPage>
				<Header />
				<DetailCharacter character={character} />
				<div className="backhome__button--container">
					<Button text={'Home'} onClick={navigateToHome} className={'backhome__button'} />
				</div>
				<Footer />
			</StyledDetailPage>
		</>
	);
};

export default DetailPage;
