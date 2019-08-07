import { ActionTypeKeys } from './ActionTypeKeys'
import { ClearFavoritesAction } from './IAction'
import { ActionCreator } from 'redux'

const clearFavorites: ActionCreator<ClearFavoritesAction> = () => {
	return {
		type: ActionTypeKeys.CLEAR_FAVS,
	}
}
export default clearFavorites
