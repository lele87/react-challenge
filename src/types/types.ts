export interface ICharacter {
	name: string;
	id: string;
	status: string;
	image: string;
	species: string;
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
