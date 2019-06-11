import { ADD_FAV } from './../constants/constants'

export default function AddFav(id) {
	return {
		type: ADD_FAV,
		payload: id,
	}
}
