import { ActionTypeKeys } from '../actions/ActionTypeKeys'
import { FavoriteIdsAction } from '../actions/ActionTypes'
import * as State from './State'

export const init: State.FavoriteIds = {
	data: [],
}

export default function favoriteIds(state = init, action: FavoriteIdsAction): State.FavoriteIds {
	switch (action.type) {
		case ActionTypeKeys.ADD_FAV_ID:
			return {
				data: [...state.data, action.payload],
			}
		case ActionTypeKeys.DEL_FAV_ID:
			return {
				data: state.data.filter(fav => fav !== action.payload),
			}
		default:
			return state
	}
}
