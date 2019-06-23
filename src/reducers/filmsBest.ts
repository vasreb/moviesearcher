import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { GetBestAction } from '../actions/ActionTypes'
import * as State from './State'

export const init: State.BestFilms = {
	isLoading: false,
	data: [],
	totalPages: 0,
	currentPage: 1,
}

export default function filmsBest(state = init, action: GetBestAction) {
	switch (action.type) {
		case ActionTypeKeys.NEW_BEST_REQUEST:
			return {
				...state,
				currentPage: 1,
				data: [],
			}
		case ActionTypeKeys.GET_BEST_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case ActionTypeKeys.GET_BEST_SUCCESS:
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
