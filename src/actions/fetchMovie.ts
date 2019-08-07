import { API_KEY } from '../constants/constants'
import { ActionTypeKeys } from './ActionTypeKeys'
import { ThunkAction } from 'redux-thunk'
import { AppState } from '../reducers/main'
import { SpecifyMovie } from '../models/SpecifyMovie'
import Axios from '../constants/axios'
import { ActionCreator, Dispatch } from 'redux'
import { GetMovieRequestAction, GetMovieSuccessAction, GetErrorAction } from './IAction'
import { GetMovieAction } from './ActionTypes'

const fetchMovie: ActionCreator<ThunkAction<void, AppState, null, GetMovieAction>> = (id: number) => {
	return async (dispatch: Dispatch) => {
		const getMovieRequestAction: GetMovieRequestAction = {
			type: ActionTypeKeys.GET_MOVIE_REQUEST,
		}
		dispatch(getMovieRequestAction)
		try {
			let res = await Axios.get(`/movie/${id}?api_key=${API_KEY}`)
			if (res.status === 200) {
				const { data }: { data: SpecifyMovie } = res
				const getMovieSuccessAction: GetMovieSuccessAction = {
					type: ActionTypeKeys.GET_MOVIE_SUCCESS,
					payload: data,
				}
				dispatch(getMovieSuccessAction)
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

export default fetchMovie
