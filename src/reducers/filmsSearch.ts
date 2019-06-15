import {
	GET_SEARCH_REQUEST,
	GET_SEARCH_SUCCESS,
	GET_ERROR,
	NEW_SEARCH_REQUEST,
} from '../constants/constants'

export const init = {
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
			}
		case GET_SEARCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: state.data.concat(action.payload.data),
				totalPages: action.payload.totalPages,
				currentPage: state.currentPage + 1,
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
