export const QUERY = 'query'
export const FILTER = 'filter'
export const ASC = 'asc'
export const DESC = 'desc'

export const POPULARITY = 'popularity'
export const RELEASE_DATE = 'release_date'
export const REVENUE = 'revenue'
export const VOTE_AVERAGE = 'vote_average'
export const VOTE_COUNT = 'vote_count'

export type SearchSort = 'popularity' | 'release_date' | 'revenue' | 'vote_average' | 'vote_count'

export type SearchMode = 'filter' | 'query'

export interface Sort {
	name: string;
	id: SearchSort;
}

type Sorts = Sort[]

export const sorts: Sorts = [
	{ name: 'Popularity', id: POPULARITY },
	{ name: 'Date', id: RELEASE_DATE },
	{ name: 'Revenue', id: REVENUE },
	{ name: 'Vote average', id: VOTE_AVERAGE },
	{ name: 'Vote count', id: VOTE_COUNT },
]
