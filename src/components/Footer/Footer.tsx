import { useLocation } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { StyledFooter, StyledDetailFooter } from './StyledFooter';

const Footer = () => {
	const location = useLocation();
	const footerDate = new Date();
	const currentYear = footerDate.getFullYear();

	return (
		<StyledFooter>
			{location.pathname === '/home' ? (
				<Pagination />
			) : (
				<StyledDetailFooter>
					<p>Copyright &copy; {currentYear} All Rights Reserved</p>
				</StyledDetailFooter>
			)}
		</StyledFooter>
	);
};

export default Footer;
