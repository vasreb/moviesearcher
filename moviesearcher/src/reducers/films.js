import {
	GET_FILMS_REQUEST,
	GET_FILMS_SUCCESS,
	GET_FILMS_ERROR,
} from '../constants/constants'

export const init = {
	error: {
		isError: false,
		error: null,
	},
	isLoading: false,
	data: [],
	totalPages: null,
	currentPage: 1,
}

export default function films(state = init, action) {
	switch (action.type) {
		case GET_FILMS_REQUEST:
			return {
				...state,
				isLoading: true,
				error: {
					isError: false,
					error: null,
				},
			}
		case GET_FILMS_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: state.data.concat(action.payload.data),
				totalPages: action.payload.totalPages,
				currentPage: state.currentPage + 1,
			}
		case GET_FILMS_ERROR:
			return {
				...state,
				isError: true,
				error: {
					isError: true,
					error: action.payload,
				},
			}
		default:
			return state
	}
}