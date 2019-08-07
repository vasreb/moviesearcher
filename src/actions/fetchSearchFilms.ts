import FilmCard from '../models/FilmCard'
import { ActionTypeKeys } from './ActionTypeKeys'
import { AppState } from '../reducers/main'
import Axios from '../constants/axios'
import { ThunkAction } from 'redux-thunk'
import getSearchLink from '../utilities/getSearchLink'
import { ActionCreator, Dispatch } from 'redux'
import { GetSearchRequestAction, GetSearchSuccessAction, GetErrorAction } from './IAction'
import { GetSearchAction } from './ActionTypes'

const fetchSearchFilms: ActionCreator<ThunkAction<void, AppState, null, GetSearchAction>> = (page: number) => {
	const link = getSearchLink()
	return async (dispatch: Dispatch) => {
		const getMovieRequestAction: GetSearchRequestAction = {
			type: ActionTypeKeys.GET_SEARCH_REQUEST,
		}
		dispatch(getMovieRequestAction)
		try {
			let res = await Axios.get(`${link}&page=${page}`)
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
				const getSearchSuccessAction: GetSearchSuccessAction = {
					type: ActionTypeKeys.GET_SEARCH_SUCCESS,
					payload: {
						data: mappedFilmCardsData,
						totalPages: total_pages,
					},
				}
				dispatch(getSearchSuccessAction)
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

export default fetchSearchFilms
