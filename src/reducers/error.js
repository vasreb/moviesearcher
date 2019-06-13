import {
	GET_ERROR,
	GET_BEST_REQUEST,
	GET_FAV_FILM_REQUEST,
	GET_SEARCH_REQUEST,
} from '../constants/constants'

export const init = {
	isError: false,
	error: null,
}

export default function error(state = init, action) {
	switch (action.type) {
		case GET_BEST_REQUEST:
		case GET_FAV_FILM_REQUEST:
		case GET_SEARCH_REQUEST:
			return {
				isError: false,
				error: null,
			}
		case GET_ERROR:
			return {
				isError: true,
				error: action.payload,
			}
		default:
			return state
	}
}
