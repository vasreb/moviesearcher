import { ADD_FAV_ID, DEL_FAV_ID } from '../constants/constants'

export const init = {
	data: [],
}

export default function favoriteIds(state = init, action) {
	switch (action.type) {
		case ADD_FAV_ID:
			return {
				data: state.data.concat(action.payload),
			}
		case DEL_FAV_ID:
			return {
				data: state.data.filter(fav => fav !== action.payload),
			}
		default:
			return state
	}
}
