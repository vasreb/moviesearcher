import { ActionTypeKeys } from './ActionTypeKeys'

interface DelFavAction {
	type: ActionTypeKeys.DEL_FAV_ID;
	payload: number;
}

export default function DelFav(id: number): DelFavAction {
	return {
		type: ActionTypeKeys.DEL_FAV_ID,
		payload: id,
	}
}
