import { ActionTypeKeys } from './ActionTypeKeys'

export interface ChangeSortDirectionAction {
	type: ActionTypeKeys.CHANGE_SORT_DIRECTION;
}

export default function changeSortDirection(): ChangeSortDirectionAction {
	return {
		type: ActionTypeKeys.CHANGE_SORT_DIRECTION,
	}
}
