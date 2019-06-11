import { CLEAR_FAVS } from './../constants/constants'

export default function clearFavorites() {
	return {
		type: CLEAR_FAVS,
	}
}
