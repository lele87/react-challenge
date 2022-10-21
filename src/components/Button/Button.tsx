import { IButtonProps } from '../../types/types';
import StyledButton from './StyledButton';

const Button = ({ onClick, text, className }: IButtonProps) => {
	return (
		<StyledButton onClick={onClick} className={className}>
			{text}
		</StyledButton>
	);
};
export default Button;
