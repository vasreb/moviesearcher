import { CHANGE_SORT } from './../constants/constants'

export default function AddGenre(sortName) {
	return {
		type: CHANGE_SORT,
		payload: sortName,
	}
}
