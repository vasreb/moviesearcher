import SET_GENRE_ID from './../constants/constants'

export default function setGenre(id) {
	return { type: SET_GENRE_ID, payload: id }
}
