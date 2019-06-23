import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { GetMovieAction } from '../actions/ActionTypes'
import * as State from './State'

export const init: State.Movie = {
	isLoading: true,
	data: null,
	isFavorite: false,
}

export default function movie(state = init, action: GetMovieAction) {
	switch (action.type) {
		case ActionTypeKeys.GET_MOVIE_REQUEST:
			return {
				...state,
				isLoading: true,
				isFavorite: false,
			}
		case ActionTypeKeys.GET_MOVIE_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
			}
		case ActionTypeKeys.GET_ERROR:
			return {
				...state,
				isLoading: false,
			}
		default:
			return state
	}
}
