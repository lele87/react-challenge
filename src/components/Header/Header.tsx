import { NavLink } from 'react-router-dom';
import StyleHeader from './StyledHeader';

const Header = () => {
	return (
		<StyleHeader className="header--container">
			<div className="header">
				<div className="header__logo--container">
					<NavLink to="/home">
						<img className="logo" src="/images/Rick-Morty-logo.png" alt="Rick and Morty logo" />
					</NavLink>
				</div>
			</div>
		</StyleHeader>
	);
};

export default Header;
