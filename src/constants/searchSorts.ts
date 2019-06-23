import {
	POPULARITY,
	RELEASE_DATE,
	REVENUE,
	VOTE_AVERAGE,
	VOTE_COUNT,
} from './constants'

const sorts = [
	{ name: 'Popularity', id: POPULARITY },
	{ name: 'Date', id: RELEASE_DATE },
	{ name: 'Revenue', id: REVENUE },
	{ name: 'Vote average', id: VOTE_AVERAGE },
	{ name: 'Vote count', id: VOTE_COUNT },
]

export default sorts
