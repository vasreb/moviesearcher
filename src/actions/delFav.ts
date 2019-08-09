import { ActionTypeKeys } from './ActionTypeKeys'
import { DelFavoriteAction } from './IAction'
import { ActionCreator } from 'redux'

const delFav: ActionCreator<DelFavoriteAction> = (id: number) => {
	return {
		type: ActionTypeKeys.DEL_FAV_ID,
		payload: id,
	}
}

export default delFav
