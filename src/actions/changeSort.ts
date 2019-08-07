import { ActionTypeKeys } from './ActionTypeKeys'
import { SearchSort } from '../constants/FilterConstants'
import { ChangeSortAction } from './IAction'
import { ActionCreator } from 'redux'

const changeSort: ActionCreator<ChangeSortAction> = (sortName: SearchSort) => {
	return {
		type: ActionTypeKeys.CHANGE_SORT,
		payload: sortName,
	}
}

export default changeSort
