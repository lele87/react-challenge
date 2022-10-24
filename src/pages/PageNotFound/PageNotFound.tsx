import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StyledPageNotFound from './StyledPageNotFound';

const PageNotFound = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/home');
	};

	return (
		<>
			<StyledPageNotFound>
				<Header />
				<div className="content">
					<p className="message">
						Sorry,<br></br>Page not found
					</p>
					<img src="/images/pagenotfound.png" alt="Rick & Morty 404 error" />
					<div className="backhome__button--container">
						<Button text={'Home'} onClick={navigateToHome} className={'backhome__button'} />
					</div>
				</div>
				<Footer />
			</StyledPageNotFound>
		</>
	);
};

export default PageNotFound;
