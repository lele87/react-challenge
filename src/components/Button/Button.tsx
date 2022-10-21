import StyledButton from './StyledButton';

interface IButtonProps {
	action?: React.MouseEventHandler;
	text: string;
	className: string;
}

const Button = ({ action, text, className }: IButtonProps) => {
	return (
		<StyledButton onClick={action} className={className}>
			{text}
		</StyledButton>
	);
};
export default Button;
