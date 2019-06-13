import {
	GET_MOVIE_REQUEST,
	GET_MOVIE_SUCCESS,
	GET_ERROR,
} from '../constants/constants'

export const init = {
	isLoading: true,
	data: {},
	isFavorite: false,
}

export default function movie(state = init, action) {
	switch (action.type) {
		case GET_MOVIE_REQUEST:
			return {
				...state,
				isLoading: true,
				error: {
					isError: false,
					error: null,
				},
				isFavorite: false,
			}
		case GET_MOVIE_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload,
			}
		case GET_ERROR:
			return {
				...state,
				isLoading: false,
			}
		default:
			return state
	}
}
