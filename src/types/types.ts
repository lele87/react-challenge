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
