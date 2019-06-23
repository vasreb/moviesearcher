import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { FilterAction } from '../actions/ActionTypes'
import { FILTER, QUERY } from '../constants/FilterConstants'
import * as State from './State'

export const init: State.SearchMode = QUERY

export default function searchMode(state = init, action: FilterAction) {
	switch (action.type) {
		case ActionTypeKeys.ADD_GENRE_ID:
		case ActionTypeKeys.DEL_GENRE_ID:
		case ActionTypeKeys.CHANGE_SORT:
		case ActionTypeKeys.CHANGE_SORT_DIRECTION:
			return FILTER
		case ActionTypeKeys.CHANGE_SEARCH_QUERY:
			return QUERY
		default:
			return state
	}
}
