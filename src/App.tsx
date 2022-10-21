import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/Homepage';
import { useAppSelector } from './redux/store/hooks';

function App() {
	const { loaded } = useAppSelector(state => state.ui);
	const { character } = useAppSelector(state => state);

	return (
		<>
			{loaded && <LoadingSpinner />}
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/details/:idCharacter" element={<DetailPage character={character} />} />
			</Routes>
		</>
	);
}

export default App;
