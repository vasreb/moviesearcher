import store from '../store/store'
import { QUERY, FILTER, ASC, DESC, API_KEY } from './../constants/constants'

export default function getSearchLink() {
	const { genres, sort, isAsc, query } = store.getState().filters
	const mode = store.getState().searchMode
	switch (mode) {
		case QUERY:
			if (query.length > 0) {
				return `/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
			} //not a bug but feature
		case FILTER:
			return `/discover/movie?api_key=${API_KEY}&vote_count.gte=200&sort_by=${sort}.${
				isAsc ? ASC : DESC
			}&with_genres=${genres.concat().join(',')}`
	}
}
