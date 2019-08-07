import { ActionTypeKeys } from './ActionTypeKeys'
import { DelGenreAction } from './IAction'
import { ActionCreator } from 'redux'

const DelGenre: ActionCreator<DelGenreAction> = (id: number) => {
	return {
		type: ActionTypeKeys.DEL_GENRE_ID,
		payload: id,
	}
}

export default DelGenre
