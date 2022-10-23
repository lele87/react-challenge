import { StyledFooter } from './StyledFooter';

const Footer = ({ error }: any) => {
	const footerDate = new Date();
	const currentYear = footerDate.getFullYear();

	return (
		<StyledFooter>
			<p className="footer__text">Copyright &copy; {currentYear}</p>
		</StyledFooter>
	);
};

export default Footer;
