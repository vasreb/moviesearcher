import { DEL_GENRE_ID } from './../constants/constants'

export default function DelGenre(id) {
	return {
		type: DEL_GENRE_ID,
		payload: id,
	}
}
