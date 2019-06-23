import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { GetFavoriteAction } from '../actions/ActionTypes'
import * as State from './State'

export const init: State.FavoriteFilms = {
	isLoading: false,
	data: [],
	totalPages: -1,
	currentPage: 1,
}

export default function filmsFavorite(state = init, action: GetFavoriteAction) {
	switch (action.type) {
		case ActionTypeKeys.GET_FAV_FILM_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case ActionTypeKeys.GET_FAV_FILM_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...state.data, action.payload],
			}
		case ActionTypeKeys.GET_ERROR:
			return {
				...state,
				isLoading: false,
			}
		case ActionTypeKeys.CLEAR_FAVS:
			return {
				...state,
				data: [],
			}
		default:
			return state
	}
}
