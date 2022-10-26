import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/Homepage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { useAppSelector } from './redux/store/hooks';

function App() {
	const { loaded } = useAppSelector(state => state.ui);

	return (
		<>
			{loaded && <LoadingSpinner />}
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/details/:idCharacter" element={<DetailPage />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
