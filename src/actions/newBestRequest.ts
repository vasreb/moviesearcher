import { ActionTypeKeys } from './ActionTypeKeys'
import { ActionCreator } from 'redux'
import { NewBestRequestAction } from './IAction'

const newBestRequest: ActionCreator<NewBestRequestAction> = () => {
	return {
		type: ActionTypeKeys.NEW_BEST_REQUEST,
	}
}
export default newBestRequest
