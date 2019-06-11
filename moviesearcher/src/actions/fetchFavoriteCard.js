import {
	GET_FAV_FILM_REQUEST,
	GET_FAV_FILM_SUCCESS,
	GET_FAV_FILM_ERROR,
} from './../constants/constants'

import Axios from './../constants/axios'

export default function fetchFavoriteCard(id) {
	return async dispatch => {
		dispatch({
			type: GET_FAV_FILM_REQUEST,
		})
		try {
			let res = await Axios.get(
				`/movie/${id}?api_key=9d923168206684ddbd944abae426483e`
			)
			if (res.status === 200) {
				res = res.data
				const { id, overview, title, poster_path: posterUrl } = res
				dispatch({
					type: GET_FAV_FILM_SUCCESS,
					payload: { id, overview, title, posterUrl },
				})
			} else {
				throw new Error(res.status_code)
			}
		} catch (err) {
			dispatch({
				type: GET_FAV_FILM_ERROR,
				payload: +err.message,
			})
		}
	}
}
