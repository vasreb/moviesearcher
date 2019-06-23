import { ActionTypeKeys } from './ActionTypeKeys'
import { SearchSort } from '../constants/FilterConstants'

export interface ChangeSortAction {
	type: ActionTypeKeys.CHANGE_SORT;
	payload: string;
}

export default function changeSort(sortName: SearchSort): ChangeSortAction {
	return {
		type: ActionTypeKeys.CHANGE_SORT,
		payload: sortName,
	}
}
