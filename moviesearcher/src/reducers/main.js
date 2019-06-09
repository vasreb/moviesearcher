import { combineReducers } from 'redux'
import films from './films'
import movie from './movie'
import searchFilms from './searchFilms'

export default combineReducers({
	films,
	movie,
	searchFilms,
})
