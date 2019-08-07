import { ActionTypeKeys } from './ActionTypeKeys'
import { ActionCreator } from 'redux'
import { NewSearchRequestAction } from './IAction'

const newSearchRequest: ActionCreator<NewSearchRequestAction> = () => {
	return {
		type: ActionTypeKeys.NEW_SEARCH_REQUEST,
	}
}

export default newSearchRequest
