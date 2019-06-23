import { ActionTypeKeys } from './ActionTypeKeys'

interface AddFavAction {
	type: ActionTypeKeys.ADD_FAV_ID;
	payload: number;
}

export default function addFav(id: number): AddFavAction {
	return {
		type: ActionTypeKeys.ADD_FAV_ID,
		payload: id,
	}
}
