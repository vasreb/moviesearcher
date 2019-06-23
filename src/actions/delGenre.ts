import { ActionTypeKeys } from './ActionTypeKeys'

interface DelGenreAction {
	type: ActionTypeKeys.DEL_GENRE_ID;
	payload: number;
}

export default function DelGenre(id: number): DelGenreAction {
	return {
		type: ActionTypeKeys.DEL_GENRE_ID,
		payload: id,
	}
}
