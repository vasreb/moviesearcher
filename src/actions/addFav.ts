import { ActionTypeKeys } from './ActionTypeKeys'
import { AddFavoriteAction } from './IAction'

export default function addFav(id: number): AddFavoriteAction {
	return {
		type: ActionTypeKeys.ADD_FAV_ID,
		payload: id,
	}
}
