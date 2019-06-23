import { ActionTypeKeys } from './ActionTypeKeys'

export interface ClearFavoritesAction {
	type: ActionTypeKeys.CLEAR_FAVS;
}

export default function clearFavorites(): ClearFavoritesAction {
	return {
		type: ActionTypeKeys.CLEAR_FAVS,
	}
}
