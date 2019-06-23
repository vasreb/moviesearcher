import { Action } from 'redux'
import FilmCard from '../models/FilmCard'
import { ActionTypeKeys } from './ActionTypeKeys'
import { AppState } from '../reducers/main'
import Axios from '../constants/axios'
import { ThunkAction } from 'redux-thunk'
import getSearchLink from '../utilities/getSearchLink'

export default function fetchSearchFilms(page: number): ThunkAction<void, AppState, null, Action<string>> {
	const link = getSearchLink()
	return async dispatch => {
		dispatch({
			type: ActionTypeKeys.GET_SEARCH_REQUEST,
		})
		try {
			let res = await Axios.get(`${link}&page=${page}`)
			if (res.status === 200) {
				const { data } = res
				const { total_pages } = data
				const mappedFilmCardData: FilmCard[] = data.results.map(film => {
					const { id, poster_path, title, overview } = film
					return {
						id,
						overview,
						title,
						posterUrl: poster_path,
					}
				})
				dispatch({
					type: ActionTypeKeys.GET_SEARCH_SUCCESS,
					payload: {
						data: mappedFilmCardData,
						totalPages: total_pages,
					},
				})
			} else {
				throw new Error(res.data.status_code)
			}
		} catch (err) {
			dispatch({
				type: ActionTypeKeys.GET_ERROR,
				payload: err.message,
			})
		}
	}
}
