import { ActionTypeKeys } from './ActionTypeKeys'

export default function newSearchRequest() {
	return {
		type: ActionTypeKeys.NEW_SEARCH_REQUEST,
	}
}
