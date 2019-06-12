import { CHANGE_SEARCH_QUERY } from './../constants/constants'
export default function changeSearchQuery(text) {
	return {
		type: CHANGE_SEARCH_QUERY,
		payload: text,
	}
}
