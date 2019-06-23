import { ActionTypeKeys } from './ActionTypeKeys'

interface AddGenreAction {
	type: ActionTypeKeys.ADD_GENRE_ID;
	payload: number;
}

export default function addGenre(id: number): AddGenreAction {
	return {
		type: ActionTypeKeys.ADD_GENRE_ID,
		payload: id,
	}
}
