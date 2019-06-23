import { SpecifyMovie } from '../models/SpecifyMovie'
import { Page } from '../models/abstract'
import { FilmList } from '../models/abstract'
import FilmCard from '../models/FilmCard'
import { SearchSort, SearchMode } from '../constants/FilterConstants'

export type SearchMode = SearchMode

export interface Movie extends Page {
	data: SpecifyMovie | null;
	isFavorite: boolean;
}

export interface Filter {
	genres: number[];
	sort: SearchSort;
	isAsc: boolean;
	query: string;
}

export interface BestFilms extends FilmList {
	data: FilmCard[];
}

export interface FavoriteFilms extends FilmList {
	data: FilmCard[];
}

export interface SearchFilms extends FilmList {
	data: FilmCard[];
}

export interface FavoriteIds {
	data: number[];
}

export interface Error {
	isError: boolean;
	error: any;
}
