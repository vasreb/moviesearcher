import { ADD_FAV, DEL_FAV } from '../constants/constants'

export const init = {
	data: [],
}

export default function films(state = init, action) {
	switch (action.type) {
		case ADD_FAV:
			return {
				data: state.data.concat(action.payload),
			}
		case DEL_FAV:
			const index = state.data.indexOf(action.payload)
			state.data.splice(index, 1)
			return {
				data: [...state.data],
			}
		default:
			return state
	}
}
