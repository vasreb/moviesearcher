import { ActionTypeKeys } from './ActionTypeKeys'
import { AddGenreAction } from './IAction'
import { ActionCreator } from 'redux'

const addGenre: ActionCreator<AddGenreAction> = (id: number) => {
	return {
		type: ActionTypeKeys.ADD_GENRE_ID,
		payload: id,
	}
}

export default addGenre
