import {
	GET_SEARCH_REQUEST,
	GET_SEARCH_SUCCESS,
	GET_SEARCH_ERROR,
	QUERY,
	FILTER,
	ASC,
	DESC,
	API_KEY,
} from '../constants/constants'

import Axios from '../constants/axios'

import store from '../store/store'

export default function fetchSearchFilms() {
	const { currentPage: page } = store.getState().filmsSearch
	const { genres, sort, isAsc, query } = store.getState().filters
	const mode = store.getState().searchMode
	let link
	if (mode === QUERY) {
		link = `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
	} else if (mode === FILTER) {
		link = `/discover/movie?api_key=${API_KEY}&vote_count.gte=200&sort_by=${sort}.${
			isAsc ? ASC : DESC
		}&with_genres=${genres.concat().join(',')}`
	}

	return async dispatch => {
		dispatch({
			type: GET_SEARCH_REQUEST,
		})
		try {
			let res = await Axios.get(`${link}&page=${page}`)
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
				payload: err.message,
			})
		}
	}
}
