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
			const index = state.data.indexOf(action.payload)
			state.data.splice(index, 1)
			return {
				data: [...state.data],
			}
		default:
			return state
	}
}
