export interface ICharacter {
	name: string;
	id: string;
	status: string;
	image: string;
	species: string;
}

export interface ICharacterState {
	characterInfo: ICharacter[];
}

export interface ICharactersListProps {
	charactersList: ICharacter[];
}

export interface IPagination {
	totalPages: number;
	currentPage: number;
}
