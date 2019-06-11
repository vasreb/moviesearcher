import {
	GET_BEST_REQUEST,
	GET_BEST_SUCCESS,
	GET_BEST_ERROR,
} from '../constants/constants'

import Axios from '../constants/axios'

// import store from '../store/store'

export default function fetchBestFilms(page = 1) {
	return async dispatch => {
		dispatch({
			type: GET_BEST_REQUEST,
		})
		try {
			let res = await Axios.get(
				`/movie/top_rated?api_key=9d923168206684ddbd944abae426483e&page=${page}`
			)
			if (res.status === 200) {
				res = res.data
				const { total_pages } = res
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
					type: GET_BEST_SUCCESS,
					payload: {
						data: res,
						totalPages: total_pages,
					},
				})
			} else {
				throw new Error(res.status_code)
			}
		} catch (err) {
			dispatch({
				type: GET_BEST_ERROR,
				payload: +err.message,
			})
		}
	}
}
