import {
	GET_SEARCH_REQUEST,
	GET_SEARCH_SUCCESS,
	GET_SEARCH_ERROR,
} from '../constants/constants'

import Axios from '../constants/axios'

import store from '../store/store'

export default function fetchSearchFilms() {
	const { currentPage: page, query } = store.getState().filmsSearch
	return async dispatch => {
		dispatch({
			type: GET_SEARCH_REQUEST,
		})
		try {
			let res = await Axios.get(
				`/search/movie?api_key=9d923168206684ddbd944abae426483e&query=${encodeURIComponent(
					query
				)}&page=${page}`
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
					type: GET_SEARCH_SUCCESS,
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
				type: GET_SEARCH_ERROR,
				payload: +err.message,
			})
		}
	}
}
