import {
	GET_FAV_FILM_REQUEST,
	GET_FAV_FILM_SUCCESS,
	GET_ERROR,
	API_KEY,
} from './../constants/constants'

import Axios from './../constants/axios'

export default function fetchFavoriteCard(id) {
	return async dispatch => {
		dispatch({
			type: GET_FAV_FILM_REQUEST,
		})
		try {
			let res = await Axios.get(`/movie/${id}?api_key=${API_KEY}`)
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
				type: GET_ERROR,
				payload: err.message,
			})
		}
	}
}
