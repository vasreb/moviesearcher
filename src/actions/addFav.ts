import { ActionTypeKeys } from './ActionTypeKeys'
import { AddFavoriteAction } from './IAction'
import { ActionCreator } from 'redux'

const addFav: ActionCreator<AddFavoriteAction> = (id: number) => {
	return {
		type: ActionTypeKeys.ADD_FAV_ID,
		payload: id,
	}
}

export default addFav
