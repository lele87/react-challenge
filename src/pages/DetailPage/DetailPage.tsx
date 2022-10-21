import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import DetailCharacter from '../../components/DetailCharacter/DetailCharacter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useAppDispatch } from '../../redux/store/hooks';
import { loadSingleCharacterThunk } from '../../redux/thunks/detailCharacterThunks';
import StyledDetailPage from './StyledDetaiPage';
import { IDetailCharacterProps } from '../../types/types';

const DetailPage = ({ character }: IDetailCharacterProps) => {
	const { idCharacter } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/');
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(loadSingleCharacterThunk(idCharacter as string));
	}, [dispatch, idCharacter]);

	return (
		<>
			<StyledDetailPage>
				<div className="content">
					<Header />
					<DetailCharacter character={character} />
					<div className="backhome__button--container">
						<Button text={'Home'} onClick={navigateToHome} className={'backhome__button'} />
					</div>
				</div>
				<Footer />
			</StyledDetailPage>
		</>
	);
};

export default DetailPage;
