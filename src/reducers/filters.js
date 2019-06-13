import {
	ADD_GENRE_ID,
	DEL_GENRE_ID,
	CHANGE_SORT,
	CHANGE_SORT_DIRECTION,
} from '../constants/constants'

export const init = {
	genres: [],
	sort: 'popularity',
	isAsc: false,
}

export default function currentGenres(state = init, action) {
	switch (action.type) {
		case ADD_GENRE_ID:
			return {
				...state,
				genres: state.genres.concat(action.payload),
			}
		case DEL_GENRE_ID:
			const index = state.genres.indexOf(action.payload)
			state.genres.splice(index, 1)
			return {
				...state,
				genres: [...state.genres],
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
		default:
			return state
	}
}
