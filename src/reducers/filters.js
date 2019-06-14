import {
	ADD_GENRE_ID,
	DEL_GENRE_ID,
	CHANGE_SORT,
	CHANGE_SORT_DIRECTION,
	CHANGE_SEARCH_QUERY,
} from '../constants/constants'

export const init = {
	genres: [],
	sort: 'popularity',
	isAsc: false,
	query: '',
}

export default function filters(state = init, action) {
	switch (action.type) {
		case ADD_GENRE_ID:
			return {
				...state,
				genres: state.genres.concat(action.payload),
			}
		case DEL_GENRE_ID:
			return {
				...state,
				genres: state.genres.filter(genre => genre !== action.payload),
			}
		case CHANGE_SORT:
			return {
				...state,
				sort: action.payload,
			}
		case CHANGE_SORT_DIRECTION:
			return {
				...state,
				isAsc: !state.isAsc,
			}
		case CHANGE_SEARCH_QUERY:
			return {
				...state,
				query: action.payload,
			}
		default:
			return state
	}
}
