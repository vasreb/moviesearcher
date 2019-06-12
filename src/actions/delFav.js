import { DEL_FAV_ID } from './../constants/constants'

export default function DelFav(id) {
	return {
		type: DEL_FAV_ID,
		payload: id,
	}
}
