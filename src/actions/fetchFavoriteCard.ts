import FilmCard from '../models/FilmCard'
import { API_KEY } from '../constants/constants'
import { ActionTypeKeys } from './ActionTypeKeys'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducers/main'
import Axios from './../constants/axios'

export default function fetchFavoriteCard(id: number): ThunkAction<void, AppState, null, Action<string>> {
	return async dispatch => {
		dispatch({
			type: ActionTypeKeys.GET_FAV_FILM_REQUEST,
		})
		try {
			const res = await Axios.get(`/movie/${id}?api_key=${API_KEY}`)
			if (res.status === 200) {
				const { data } = res
				const { id, overview, title, poster_path: posterUrl } = data
				const filmCardData: FilmCard = { id, overview, title, posterUrl }
				dispatch({
					type: ActionTypeKeys.GET_FAV_FILM_SUCCESS,
					payload: filmCardData,
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
