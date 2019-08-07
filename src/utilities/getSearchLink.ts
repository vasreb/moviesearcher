import store from '../store/store'
import { API_KEY } from '../constants/constants'
import { QUERY, FILTER, ASC, DESC } from './../constants/FilterConstants'

export default function getSearchLink() {
	const { genres, sort, isAsc, query } = store.getState().filters
	const mode = store.getState().searchMode
	switch (mode) {
		case QUERY:
			if (query.length > 0) {
				return `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
			} //not a bug but feature
		// eslint-disable-next-line
		case FILTER:
			return `/discover/movie?api_key=${API_KEY}&vote_count.gte=200&sort_by=${sort}.${
				isAsc ? ASC : DESC
			}&with_genres=${genres.concat().join(',')}`
	}
}
