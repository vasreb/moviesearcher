import FilmCard from '../models/FilmCard'
import { API_KEY } from '../constants/constants'
import { ActionTypeKeys } from './ActionTypeKeys'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducers/main'
import Axios from './../constants/axios'
import { ActionCreator, Dispatch } from 'redux'
import { GetFavoriteRequestAction, GetFavoriteSuccessAction, GetErrorAction } from './IAction'
import { GetFavoriteAction } from './ActionTypes'

const fetchFavoriteCard: ActionCreator<ThunkAction<void, AppState, null, GetFavoriteAction>> = (id: number) => {
	return async (dispatch: Dispatch) => {
		const getFavoriteRequestAction: GetFavoriteRequestAction = {
			type: ActionTypeKeys.GET_FAV_FILM_REQUEST,
		}
		dispatch(getFavoriteRequestAction)
		try {
			const res = await Axios.get(`/movie/${id}?api_key=${API_KEY}`)
			if (res.status === 200) {
				const { data } = res
				const { id, overview, title, poster_path: posterUrl } = data
				const filmCardData: FilmCard = { id, overview, title, posterUrl }
				const getFavoriteSuccessAction: GetFavoriteSuccessAction = {
					type: ActionTypeKeys.GET_FAV_FILM_SUCCESS,
					payload: filmCardData,
				}
				dispatch(getFavoriteSuccessAction)
			} else {
				throw new Error(res.data.status_code)
			}
		} catch (err) {
			const getErrorAction: GetErrorAction = {
				type: ActionTypeKeys.GET_ERROR,
				payload: err.message,
			}
			dispatch(getErrorAction)
		}
	}
}

export default fetchFavoriteCard
