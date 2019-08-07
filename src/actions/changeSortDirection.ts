import { ActionTypeKeys } from './ActionTypeKeys'
import { ChangeSortDirectionAction } from './IAction'
import { ActionCreator } from 'redux'

const changeSortDirection: ActionCreator<ChangeSortDirectionAction> = () => {
	return {
		type: ActionTypeKeys.CHANGE_SORT_DIRECTION,
	}
}

export default changeSortDirection
