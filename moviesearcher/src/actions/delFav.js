import { DEL_FAV } from './../constants/constants'

export default function DelFav(id) {
	return {
		type: DEL_FAV,
		payload: id,
	}
}
