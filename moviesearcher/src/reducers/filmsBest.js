import {
	GET_BEST_REQUEST,
	GET_BEST_SUCCESS,
	GET_BEST_ERROR,
	NEW_BEST_REQUEST,
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

export default function filmsBest(state = init, action) {
	switch (action.type) {
		case NEW_BEST_REQUEST:
			return {
				...state,
				currentPage: 1,
				data: [],
			}
		case GET_BEST_REQUEST:
			return {
				...state,
				isLoading: true,
				error: {
					isError: false,
					error: null,
				},
			}
		case GET_BEST_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: state.data.concat(action.payload.data),
				totalPages: action.payload.totalPages,
				currentPage: state.currentPage + 1,
			}
		case GET_BEST_ERROR:
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
