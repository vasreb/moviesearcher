import { combineReducers } from 'redux'
import filmsBest from './filmsBest'
import movie from './movie'
import filmsSearch from './filmsSearch'
import favoriteIds from './favoriteIds'
import filmsFavorite from './filmsFavorite'

export default combineReducers({
	filmsBest,
	movie,
	filmsSearch,
	favoriteIds,
	filmsFavorite,
})
