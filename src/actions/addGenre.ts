import { ADD_GENRE_ID } from './../constants/constants'

export default function AddGenre(id) {
	return {
		type: ADD_GENRE_ID,
		payload: id,
	}
}
