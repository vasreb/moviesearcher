import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { FilterAction } from '../actions/ActionTypes'
import * as State from './State'
import { POPULARITY } from '../constants/FilterConstants'

export const init: State.Filter = {
	genres: [],
	sort: POPULARITY,
	isAsc: false,
	query: '',
}

export default function filters(state = init, action: FilterAction): State.Filter {
	switch (action.type) {
		case ActionTypeKeys.ADD_GENRE_ID:
			return {
				...state,
				genres: [...state.genres, action.payload],
			}
		case ActionTypeKeys.DEL_GENRE_ID:
			return {
				...state,
				genres: state.genres.filter(genre => genre !== action.payload),
			}
		case ActionTypeKeys.CHANGE_SORT:
			return {
				...state,
				sort: action.payload,
			}
		case ActionTypeKeys.CHANGE_SORT_DIRECTION:
			return {
				...state,
				isAsc: !state.isAsc,
			}
		case ActionTypeKeys.CHANGE_SEARCH_QUERY:
			return {
				...state,
				query: action.payload,
			}
		default:
			return state
	}
}
