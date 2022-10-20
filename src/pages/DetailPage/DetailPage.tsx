import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCharacter from '../../components/DetailCharacter/DetailCharacter';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { loadSingleCharacterThunk } from '../../redux/thunks/detailCharacterThunks';

const DetailPage = () => {
	const { character } = useAppSelector(state => state);
	const { idCharacter } = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadSingleCharacterThunk(idCharacter as string));
		debugger;
	}, [dispatch, idCharacter]);

	return <DetailCharacter character={character} />;
};

export default DetailPage;
