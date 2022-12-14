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
	error: boolean;
}

export interface ICharactersListProps {
	characterInfo: ICharacter[];
	filterName: string;
	filterStatus: string;
}

export interface ISortCharactersList {
	charactersList: ICharacter[];
}

export interface IDetailCharacterProps {
	character: ICharacter;
}

export interface IPagination {
	totalPages: number;
	currentPage: number;
	totalResults: number;
}

export interface IButtonProps {
	onClick?: React.MouseEventHandler;
	text: string;
	className: string;
}

export interface ICharactersResponseApi {
	data: {
		info: {
			pages: number;
			count: number;
		};
		results: [];
	};
}

export interface ICharacterResponseApi {
	data: ICharacter;
}
