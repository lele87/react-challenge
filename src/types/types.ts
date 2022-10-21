export interface ICharacter {
	name: string;
	id: string;
	status: string;
	image: string;
	species: string;
	gender: string;
	origin: {
		name: string;
	};
}
export interface ICharacterState {
	characterInfo: ICharacter[];
	filterStatus: string;
	filterName: string;
}

export interface ICharactersListProps {
	charactersList: ICharacter[];
	query: string;
}

export interface IPagination {
	totalPages: number;
	currentPage: number;
}

export interface IButtonProps {
	onClick?: React.MouseEventHandler;
	text: string;
	className: string;
}
