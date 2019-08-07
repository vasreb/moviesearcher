import { SpecifyMovie } from '../models/SpecifyMovie'
import { Page } from '../models/abstract'
import { FilmList } from '../models/abstract'
import { SearchSort, SearchMode } from '../constants/FilterConstants'

export type SearchMode = SearchMode

export interface Movie extends Page {
	data: SpecifyMovie | null;
	isFavorite: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FilmList extends FilmList {}

export interface Filter {
	genres: number[];
	sort: SearchSort;
	isAsc: boolean;
	query: string;
}

export interface FavoriteIds {
	data: number[];
}

export interface Error {
	isError: boolean;
	error: any;
}
