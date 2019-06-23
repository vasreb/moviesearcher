import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { ErrorAction } from '../actions/ActionTypes'
import * as State from './State'

export const init: State.Error = {
	isError: false,
	error: null,
}

export default function error(state = init, action: ErrorAction) {
	switch (action.type) {
		case ActionTypeKeys.GET_BEST_REQUEST:
		case ActionTypeKeys.GET_FAV_FILM_REQUEST:
		case ActionTypeKeys.GET_SEARCH_REQUEST:
			return {
				isError: false,
				error: null,
			}
		case ActionTypeKeys.GET_ERROR:
			return {
				isError: true,
				error: action.payload,
			}
		default:
			return state
	}
}
