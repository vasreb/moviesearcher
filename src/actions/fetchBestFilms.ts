import { API_KEY } from '../constants/constants'
import FilmCard from '../models/FilmCard'
import { ActionTypeKeys } from './ActionTypeKeys'
import { AppState } from '../reducers/main'
import Axios from '../constants/axios'
import { ThunkAction } from 'redux-thunk'
import { ActionCreator, Dispatch } from 'redux'
import { GetBestRequestAction, GetBestSuccessAction, GetErrorAction } from './IAction'
import { GetBestAction } from './ActionTypes'

const fetchBestFilms: ActionCreator<ThunkAction<void, AppState, null, GetBestAction>> = (page: number = 1) => {
	return async (dispatch: Dispatch) => {
		const getBestRequestAction: GetBestRequestAction = {
			type: ActionTypeKeys.GET_BEST_REQUEST,
		}
		dispatch(getBestRequestAction)
		try {
			let res = await Axios.get(`/movie/top_rated?api_key=${API_KEY}&page=${page}`)
			if (res.status === 200) {
				const { data } = res
				const { total_pages } = data
				const mappedFilmCardsData: FilmCard[] = data.results.map((film): FilmCard => {
					const { id, poster_path, title, overview } = film
					return {
						id,
						overview,
						title,
						posterUrl: poster_path,
					}
				})
				const getBestSuccessAction: GetBestSuccessAction = {
					type: ActionTypeKeys.GET_BEST_SUCCESS,
					payload: {
						data: mappedFilmCardsData,
						totalPages: total_pages,
					},
				}
				dispatch(getBestSuccessAction)
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

export default fetchBestFilms
