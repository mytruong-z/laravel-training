export interface allList {
	id: number;
	title: string;
	userId: number
	completed: boolean;
}

export interface reducersState {
	loaded: boolean;
	allList: allList[];
	userId: string;
	totalItem: number;
	userList: number[];
	newValue: string;
}

export interface Actions {
	payload?: any;
	type: string;
}