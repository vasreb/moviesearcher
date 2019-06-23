import {
	GetBestRequestAction,
	GetBestSuccessAction,
	GetErrorAction,
	NewBestRequestAction,
	GetFavoriteRequestAction,
	GetFavoriteSuccessAction,
	ClearFavsAction,
	GetMovieRequestAction,
	GetMovieSuccessAction,
	GetSearchRequestAction,
	GetSearchSuccessAction,
	NewSearchRequestAction,
	DelFavoriteIdAction,
	AddFavoriteIdAction,
	AddGenreId,
	DelGenreId,
	ChangeSort,
	ChangeSortDirection,
	ChangeSearchQuery,
} from './IAction'

export type GetBestAction = GetBestRequestAction | GetBestSuccessAction | GetErrorAction | NewBestRequestAction
export type GetFavoriteAction = GetFavoriteRequestAction | GetFavoriteSuccessAction | GetErrorAction | ClearFavsAction
export type GetMovieAction = GetMovieRequestAction | GetMovieSuccessAction | GetErrorAction
export type GetSearchAction = GetSearchRequestAction | GetSearchSuccessAction | NewSearchRequestAction | GetErrorAction
export type FavoriteIdsAction = AddFavoriteIdAction | DelFavoriteIdAction
export type ErrorAction =
	| GetBestRequestAction
	| GetFavoriteRequestAction
	| GetMovieRequestAction
	| GetSearchRequestAction
	| GetErrorAction
export type FilterAction = AddGenreId | DelGenreId | ChangeSort | ChangeSortDirection | ChangeSearchQuery
export type SearchModeAction = FilterAction
