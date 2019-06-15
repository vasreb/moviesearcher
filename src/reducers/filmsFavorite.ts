import {
	GET_FAV_FILM_REQUEST,
	GET_FAV_FILM_SUCCESS,
	GET_ERROR,
	CLEAR_FAVS,
} from '../constants/constants'

export const init = {
	isLoading: false,
	data: [],
	totalPages: -1,
	currentPage: 1,
}

export default function filmsFavorite(state = init, action) {
	switch (action.type) {
		case GET_FAV_FILM_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case GET_FAV_FILM_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: state.data.concat(action.payload),
			}
		case GET_ERROR:
			return {
				...state,
				isLoading: false,
			}
		case CLEAR_FAVS:
			return {
				...state,
				data: [],
			}
		default:
			return state
	}
}
