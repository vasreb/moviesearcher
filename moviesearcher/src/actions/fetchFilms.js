import {
	GET_FILMS_REQUEST,
	GET_FILMS_SUCCESS,
	GET_FILMS_ERROR,
} from './../constants/constants'

import Axios from './../constants/axios'

export default function fetchFilms() {
	return async dispatch => {
		dispatch({
			type: GET_FILMS_REQUEST,
		})
		try {
			let res = await Axios.get(
				'/movie/top_rated?api_key=9d923168206684ddbd944abae426483e&page=1'
			)
			if (res.status === 200) {
				res = res.data
				res = res.results.map(film => {
					const { id, poster_path, title, overview } = film
					return {
						id,
						overview,
						title,
						posterUrl: poster_path,
					}
				})
				dispatch({
					type: GET_FILMS_SUCCESS,
					payload: res,
				})
			} else {
				throw new Error(res.status_code)
			}
		} catch (err) {
			dispatch({
				type: GET_FILMS_ERROR,
				payload: +err.message,
			})
		}
	}
}
