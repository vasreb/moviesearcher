import { ActionTypeKeys } from './ActionTypeKeys'

export interface ChangeSearchQueryAction {
	type: ActionTypeKeys.CHANGE_SEARCH_QUERY;
	payload: string;
}

export default function changeSearchQuery(text: string): ChangeSearchQueryAction {
	return {
		type: ActionTypeKeys.CHANGE_SEARCH_QUERY,
		payload: text,
	}
}
