import FilmCard from '../models/FilmCard'
import { SpecifyMovie } from '../models/SpecifyMovie'
import { ActionTypeKeys } from './ActionTypeKeys'
import { SearchSort } from '../constants/FilterConstants'

interface Action {
	readonly type: ActionTypeKeys;
}

//common error
export interface GetErrorAction extends Action {
	readonly type: ActionTypeKeys.GET_ERROR;
	payload: string;
}

//best
export interface GetBestRequestAction extends Action {
	readonly type: ActionTypeKeys.GET_BEST_REQUEST;
}

export interface GetBestSuccessAction extends Action {
	readonly type: ActionTypeKeys.GET_BEST_SUCCESS;
	payload: {
		data: FilmCard[],
		totalPages: number,
	};
}
export interface NewBestRequestAction extends Action {
	readonly type: ActionTypeKeys.NEW_BEST_REQUEST;
}

//favorite
export interface GetFavoriteRequestAction extends Action {
	readonly type: ActionTypeKeys.GET_FAV_FILM_REQUEST;
}

export interface GetFavoriteSuccessAction extends Action {
	readonly type: ActionTypeKeys.GET_FAV_FILM_SUCCESS;
	payload: FilmCard;
}

export interface ClearFavoritesAction extends Action {
	readonly type: ActionTypeKeys.CLEAR_FAVS;
}

//specify movie
export interface GetMovieRequestAction extends Action {
	readonly type: ActionTypeKeys.GET_MOVIE_REQUEST;
}

export interface GetMovieSuccessAction extends Action {
	readonly type: ActionTypeKeys.GET_MOVIE_SUCCESS;
	payload: SpecifyMovie;
}

//search

export interface GetSearchRequestAction extends Action {
	readonly type: ActionTypeKeys.GET_SEARCH_REQUEST;
}

export interface GetSearchSuccessAction extends Action {
	readonly type: ActionTypeKeys.GET_SEARCH_SUCCESS;
	payload: {
		data: FilmCard[],
		totalPages: number,
	};
}
export interface NewSearchRequestAction extends Action {
	readonly type: ActionTypeKeys.NEW_SEARCH_REQUEST;
}

//favorite ids

export interface AddFavoriteAction extends Action {
	readonly type: ActionTypeKeys.ADD_FAV_ID;
	payload: number;
}

export interface DelFavoriteAction extends Action {
	readonly type: ActionTypeKeys.DEL_FAV_ID;
	payload: number;
}

//filter
export interface AddGenreAction extends Action {
	readonly type: ActionTypeKeys.ADD_GENRE_ID;
	payload: number;
}

export interface DelGenreAction extends Action {
	readonly type: ActionTypeKeys.DEL_GENRE_ID;
	payload: number;
}

export interface ChangeSortAction extends Action {
	readonly type: ActionTypeKeys.CHANGE_SORT;
	payload: SearchSort;
}

export interface ChangeSortDirectionAction extends Action {
	readonly type: ActionTypeKeys.CHANGE_SORT_DIRECTION;
}

export interface ChangeSearchQueryAction extends Action {
	readonly type: ActionTypeKeys.CHANGE_SEARCH_QUERY;
	payload: string;
}
