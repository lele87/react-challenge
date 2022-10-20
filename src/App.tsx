import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/Homepage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</>
	);
}

export default App;
