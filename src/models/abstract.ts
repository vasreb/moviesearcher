import * as State from '../reducers/State'

export interface Page {
	isLoading: boolean;
	data: any;
}

export interface FilmList extends Page {
	totalPages: number;
	currentPage: number;
}

export interface FilmListProps {
	fetchData: () => void;
	films: any;
	error: State.Error;
	placeholder?: string;
}
