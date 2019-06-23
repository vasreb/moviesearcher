import { Action } from 'redux'
import { API_KEY } from '../constants/constants'
import { ActionTypeKeys } from './ActionTypeKeys'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducers/main'
import { SpecifyMovie } from '../models/SpecifyMovie'
import Axios from '../constants/axios'

export default function fetchMovie(id: number): ThunkAction<void, AppState, null, Action<string>> {
	return async dispatch => {
		dispatch({
			type: ActionTypeKeys.GET_MOVIE_REQUEST,
		})
		try {
			let res = await Axios.get(`/movie/${id}?api_key=${API_KEY}`)
			if (res.status === 200) {
				const { data }: { data: SpecifyMovie } = res
				dispatch({
					type: ActionTypeKeys.GET_MOVIE_SUCCESS,
					payload: data,
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
