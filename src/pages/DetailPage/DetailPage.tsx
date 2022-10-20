import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCharacter from '../../components/DetailCharacter/DetailCharacter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadSingleCharacterThunk } from '../../redux/thunks/detailCharacterThunks';

const DetailPage = () => {
	const { character } = useAppSelector(state => state);
	const { idCharacter } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadSingleCharacterThunk(idCharacter as string));
	}, [dispatch, idCharacter]);

	return (
		<>
			<Header />
			<DetailCharacter character={character} />
			<Footer />
		</>
	);
};

export default DetailPage;
