import {
	GET_FILMS_REQUEST,
	GET_FILMS_SUCCESS,
	GET_FILMS_ERROR,
} from '../constants/constants'

import Axios from '../constants/axios'

// import store from '../store/store'

export default function fetchTopFilms(page = 1) {
	// //mode
	// const { currentMode } = store.getState()
	// let link
	// switch (currentMode) {
	// 	case 'top_rated':
	// 		link = `/movie/top_rated?api_key=9d923168206684ddbd944abae426483e`
	// 		break
	// 	case 'search':
	// 		if (query.length === 0) return { type: null }
	// 		link = `/search/movie?api_key=9d923168206684ddbd944abae426483e&query=${encodeURIComponent(
	// 			query
	// 		)}`
	// }

	return async dispatch => {
		dispatch({
			type: GET_FILMS_REQUEST,
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
					type: GET_FILMS_SUCCESS,
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
				type: GET_FILMS_ERROR,
				payload: +err.message,
			})
		}
	}
}
