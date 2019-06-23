import { SpecifyMovie } from '../models/SpecifyMovie'
import { Page } from '../models/abstract'
import { FILTER, QUERY } from '../constants/constants'
import { FilmList } from '../models/abstract'
import FilmCard from '../models/FilmCard'

export type SearchMode = typeof FILTER | typeof QUERY

export interface Movie extends Page {
	data: SpecifyMovie | null;
	isFavorite: boolean;
}

export interface Filter {
	genres: number[];
	sort: string;
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
