import { combineReducers } from 'redux'
import filmsBest from './filmsBest'
import movie from './movie'
import filmsSearch from './filmsSearch'
import favoriteIds from './favoriteIds'
import filmsFavorite from './filmsFavorite'
import filters from './filters'
import searchMode from './searchMode'
import error from './error'

import * as State from './State'

export interface AppState {
	filmsBest: State.BestFilms;
	movie: State.Movie;
	filmsSearch: State.SearchFilms;
	favoriteIds: State.FavoriteIds
	filmsFavorite: State.FavoriteFilms;
	filters: State.Filter;
	searchMode: State.SearchMode;
	error: State.Error;
}

export const rootReducer = combineReducers<AppState>({
	filmsBest,
	movie,
	filmsSearch,
	favoriteIds,
	filmsFavorite,
	filters,
	searchMode,
	error,
})

