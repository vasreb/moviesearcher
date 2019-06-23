import { Action } from 'redux'
import { API_KEY } from '../constants/constants'
import FilmCard from '../models/FilmCard'
import { ActionTypeKeys } from './ActionTypeKeys'
import { AppState } from '../reducers/main'
import Axios from '../constants/axios'
import { ThunkAction } from 'redux-thunk'

export default function fetchBestFilms(page = 1): ThunkAction<void, AppState, null, Action<any>> {
	return async dispatch => {
		dispatch({
			type: ActionTypeKeys.GET_BEST_REQUEST,
		})
		try {
			let res = await Axios.get(`/movie/top_rated?api_key=${API_KEY}&page=${page}`)
			if (res.status === 200) {
				const { data } = res
				const { total_pages } = data
				const mappedFilmCardsData: FilmCard[] = data.results.map(film => {
					const { id, poster_path, title, overview } = film
					return {
						id,
						overview,
						title,
						posterUrl: poster_path,
					}
				})
				dispatch({
					type: ActionTypeKeys.GET_BEST_SUCCESS,
					payload: {
						data: mappedFilmCardsData,
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
