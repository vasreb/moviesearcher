import {
	GetBestRequestAction,
	GetBestSuccessAction,
	GetErrorAction,
	NewBestRequestAction,
	GetFavoriteRequestAction,
	GetFavoriteSuccessAction,
	ClearFavoritesAction,
	GetMovieRequestAction,
	GetMovieSuccessAction,
	GetSearchRequestAction,
	GetSearchSuccessAction,
	NewSearchRequestAction,
	DelFavoriteAction,
	AddFavoriteAction,
	AddGenreAction,
	DelGenreAction,
	ChangeSortAction,
	ChangeSortDirectionAction,
	ChangeSearchQueryAction,
} from './IAction'

export type GetBestAction = GetBestRequestAction | GetBestSuccessAction | GetErrorAction | NewBestRequestAction
export type GetFavoriteAction =
	| GetFavoriteRequestAction
	| GetFavoriteSuccessAction
	| GetErrorAction
	| ClearFavoritesAction
export type GetMovieAction = GetMovieRequestAction | GetMovieSuccessAction | GetErrorAction
export type GetSearchAction = GetSearchRequestAction | GetSearchSuccessAction | NewSearchRequestAction | GetErrorAction
export type FavoriteIdsAction = AddFavoriteAction | DelFavoriteAction
export type ErrorAction =
	| GetBestRequestAction
	| GetFavoriteRequestAction
	| GetMovieRequestAction
	| GetSearchRequestAction
	| GetErrorAction
export type FilterAction =
	| AddGenreAction
	| DelGenreAction
	| ChangeSortAction
	| ChangeSortDirectionAction
	| ChangeSearchQueryAction
export type SearchModeAction = FilterAction
