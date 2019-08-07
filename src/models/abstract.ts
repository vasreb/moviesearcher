import * as State from '../reducers/State'
import FilmCard from './FilmCard'

export interface Page {
	isLoading: boolean;
	data: any;
}

export interface FilmList extends Page {
	totalPages: number;
	currentPage: number;
	data: FilmCard[];
}

export interface FilmListProps {
	fetchData: () => void;
	films: FilmList;
	error: State.Error;
	placeholder?: string;
}
