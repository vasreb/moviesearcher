import { ActionTypeKeys } from './ActionTypeKeys'

export interface ChangeSortAction {
	type: ActionTypeKeys.CHANGE_SORT;
	payload: string;
}

export default function changeSort(sortName): ChangeSortAction {
	//add sort type
	return {
		type: ActionTypeKeys.CHANGE_SORT,
		payload: sortName,
	}
}
