import {
	GET_SEARCH_REQUEST,
	GET_SEARCH_SUCCESS,
	GET_SEARCH_ERROR,
	NEW_SEARCH_REQUEST,
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

export default function filmsSearch(state = init, action) {
	switch (action.type) {
		case NEW_SEARCH_REQUEST:
			return {
				...state,
				data: [],
				currentPage: 1,
			}
		case GET_SEARCH_REQUEST:
			return {
				...state,
				isLoading: true,
				error: {
					isError: false,
					error: null,
				},
			}
		case GET_SEARCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: state.data.concat(action.payload.data),
				totalPages: action.payload.totalPages,
				currentPage: state.currentPage + 1,
			}
		case GET_SEARCH_ERROR:
			return {
				...state,
				isError: true,
				isLoading: false,
				error: {
					isError: true,
					error: action.payload,
				},
			}
		default:
			return state
	}
}
