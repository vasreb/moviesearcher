import FilmCard from '../models/FilmCard'
import { SpecifyMovie } from '../models/SpecifyMovie'
import { ActionTypeKeys } from './ActionTypeKeys'

//common error
export interface GetErrorAction {
	type: ActionTypeKeys.GET_ERROR;
	payload: string;
}

//best
export interface GetBestRequestAction {
	type: ActionTypeKeys.GET_BEST_REQUEST;
}

export interface GetBestSuccessAction {
	type: ActionTypeKeys.GET_BEST_SUCCESS;
	payload: {
		data: FilmCard[],
		totalPages: number,
	};
}
export interface NewBestRequestAction {
	type: ActionTypeKeys.NEW_BEST_REQUEST;
}

//favorite
export interface GetFavoriteRequestAction {
	type: ActionTypeKeys.GET_FAV_FILM_REQUEST;
}

export interface GetFavoriteSuccessAction {
	type: ActionTypeKeys.GET_FAV_FILM_SUCCESS;
	payload: FilmCard;
}

export interface ClearFavsAction {
	type: ActionTypeKeys.CLEAR_FAVS;
}

//specify movie
export interface GetMovieRequestAction {
	type: ActionTypeKeys.GET_MOVIE_REQUEST;
}

export interface GetMovieSuccessAction {
	type: ActionTypeKeys.GET_MOVIE_SUCCESS;
	payload: SpecifyMovie;
}

//search

export interface GetSearchRequestAction {
	type: ActionTypeKeys.GET_SEARCH_REQUEST;
}

export interface GetSearchSuccessAction {
	type: ActionTypeKeys.GET_SEARCH_SUCCESS;
	payload: {
		data: FilmCard[],
		totalPages: number,
	};
}
export interface NewSearchRequestAction {
	type: ActionTypeKeys.NEW_SEARCH_REQUEST;
}

//favorite ids

export interface AddFavoriteIdAction {
	type: ActionTypeKeys.ADD_FAV_ID;
	payload: number;
}

export interface DelFavoriteIdAction {
	type: ActionTypeKeys.DEL_FAV_ID;
	payload: number;
}

//filter
export interface AddGenreId {
	type: ActionTypeKeys.ADD_GENRE_ID;
	payload: number;
}

export interface DelGenreId {
	type: ActionTypeKeys.DEL_GENRE_ID;
	payload: number;
}

export interface ChangeSort {
	type: ActionTypeKeys.CHANGE_SORT;
	payload: string;
}

export interface ChangeSortDirection {
	type: ActionTypeKeys.CHANGE_SORT_DIRECTION;
	payload: string;
}

export interface ChangeSearchQuery {
	type: ActionTypeKeys.CHANGE_SEARCH_QUERY;
	payload: string;
}
