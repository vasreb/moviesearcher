import { ADD_FAV_ID } from './../constants/constants'

export default function AddFav(id) {
	return {
		type: ADD_FAV_ID,
		payload: id,
	}
}
