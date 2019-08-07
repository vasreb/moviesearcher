import { ActionTypeKeys } from './ActionTypeKeys'
import { ChangeSearchQueryAction } from './IAction'
import { ActionCreator } from 'redux'

const changeSearchQuery: ActionCreator<ChangeSearchQueryAction> = (text: string) => {
	return {
		type: ActionTypeKeys.CHANGE_SEARCH_QUERY,
		payload: text,
	}
}

export default changeSearchQuery
