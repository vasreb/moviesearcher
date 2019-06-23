import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { GetSearchAction } from '../actions/ActionTypes'
import * as State from './State'

export const init: State.SearchFilms = {
	isLoading: false,
	data: [],
	totalPages: 0,
	currentPage: 1,
}

export default function filmsSearch(state = init, action: GetSearchAction) {
	switch (action.type) {
		case ActionTypeKeys.NEW_SEARCH_REQUEST:
			return {
				...state,
				data: [],
				currentPage: 1,
			}
		case ActionTypeKeys.GET_SEARCH_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case ActionTypeKeys.GET_SEARCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: [...state.data, ...action.payload.data],
				totalPages: action.payload.totalPages,
				currentPage: state.currentPage + 1,
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
