import { Navigate, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/Homepage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/details/:idCharacter" element={<DetailPage />} />
			</Routes>
		</>
	);
}

export default App;
