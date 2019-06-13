import {
	ADD_GENRE_ID,
	DEL_GENRE_ID,
	CHANGE_SORT,
	CHANGE_SORT_DIRECTION,
	CHANGE_SEARCH_QUERY,
	FILTER,
	QUERY,
} from '../constants/constants'

export const init = QUERY

export default function searchMode(state = init, action) {
	switch (action.type) {
		case ADD_GENRE_ID:
		case DEL_GENRE_ID:
		case CHANGE_SORT:
		case CHANGE_SORT_DIRECTION:
			return FILTER
		case CHANGE_SEARCH_QUERY:
			return QUERY
		default:
			return state
	}
}
